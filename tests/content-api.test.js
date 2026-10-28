const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../src/content.js'), 'utf8');

function load({ cookie = 'ds_user_id=111; csrftoken=abc', fetchImpl }) {
  const calls = [];
  const hook = {};
  const sandbox = {
    console, URL, DOMException, AbortController, setTimeout, clearTimeout, Promise,
    IFCCore: require('../src/core'),
    navigator: { language: 'en' },
    chrome: { runtime: { onMessage: { addListener() {} } } },
    document: { cookie, addEventListener() {}, getElementById: () => null },
    fetch: async (url, init) => { calls.push(url); return fetchImpl(url, init); }
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.__IFC_TEST_HOOK__ = hook;
  vm.runInNewContext(source, sandbox);
  return { hook, calls, sandbox };
}

const json = (body, status = 200, headers = {}) => ({
  ok: status < 400,
  status,
  headers: { get: (name) => headers[name.toLowerCase()] ?? null },
  json: async () => body
});
const editForm = { form_data: { username: 'Juan' } };

test('user id comes from ds_user_id cookie: no web_profile_info request', async () => {
  const { hook, calls } = load({ fetchImpl: async () => json(editForm) });
  const user = await hook.getCurrentUser();
  assert.deepEqual({ ...user }, { username: 'juan', userId: '111' });
  assert.equal(calls.length, 1);
  assert.ok(!calls.some((url) => url.includes('web_profile_info')));
});

test('repeat analysis for same account reuses identity (0 requests)', async () => {
  const { hook, calls } = load({ fetchImpl: async () => json(editForm) });
  await hook.getCurrentUser();
  await hook.getCurrentUser();
  assert.equal(calls.length, 1);
});

test('switching account (new ds_user_id) invalidates the cache', async () => {
  const { hook, calls, sandbox } = load({ fetchImpl: async () => json(editForm) });
  await hook.getCurrentUser();
  sandbox.document.cookie = 'ds_user_id=222; csrftoken=abc';
  assert.equal((await hook.getCurrentUser()).userId, '222');
  assert.equal(calls.length, 2);
});

test('server-provided user_id wins over cookie', async () => {
  const { hook } = load({
    fetchImpl: async () => json({ form_data: { username: 'juan', user_id: '999' } })
  });
  assert.equal((await hook.getCurrentUser()).userId, '999');
});

test('without cookie falls back to web_profile_info and does not cache', async () => {
  const { hook, calls } = load({
    cookie: 'csrftoken=abc',
    fetchImpl: async (url) => json(url.includes('web_profile_info') ? { data: { user: { id: '555' } } } : editForm)
  });
  assert.equal((await hook.getCurrentUser()).userId, '555');
  await hook.getCurrentUser();
  assert.equal(calls.length, 4);
});

test('429: typed error, Retry-After honored, later calls make no request', async () => {
  const { hook, calls } = load({ fetchImpl: async () => json({}, 429, { 'retry-after': '120' }) });
  await assert.rejects(hook.igFetch('https://x/a'), { code: 'rate_limited', retryAfterMs: 120000 });
  const wait = hook.getRateLimitUntil() - Date.now();
  assert.ok(wait > 110000 && wait <= 120000);
  await assert.rejects(hook.igFetch('https://x/b'), { code: 'rate_limited' });
  assert.equal(calls.length, 1);
});

test('429 without Retry-After uses a default cooldown; cooldown expiry recovers', async () => {
  let status = 429;
  const { hook, calls } = load({ fetchImpl: async () => (status === 429 ? json({}, 429) : json({ ok: 1 })) });
  await assert.rejects(hook.igFetch('https://x/a'), { code: 'rate_limited' });
  assert.ok(hook.getRateLimitUntil() - Date.now() > 9 * 60 * 1000);
  hook.resetState();
  status = 200;
  assert.deepEqual({ ...(await hook.igFetch('https://x/a')) }, { ok: 1 });
  assert.equal(calls.length, 2);
});

test('429 during pagination stops after the failing page', async () => {
  let n = 0;
  const { hook, calls } = load({
    fetchImpl: async () => (++n === 1 ? json({ users: [{ username: 'a', pk: 1 }], next_max_id: 'm' }) : json({}, 429))
  });
  await assert.rejects(hook.getRelationshipList('111', 'followers', null, undefined), { code: 'rate_limited' });
  assert.equal(calls.length, 2);
});

test('status codes map to typed errors', async () => {
  for (const [status, code] of [[400, 'bad_request'], [401, 'unauthorized'], [403, 'forbidden'], [503, 'server']]) {
    const { hook } = load({ fetchImpl: async () => json({}, status) });
    await assert.rejects(hook.igFetch('https://x/a'), { code });
  }
});

test('network failure maps to network error; abort passes through', async () => {
  let { hook } = load({ fetchImpl: async () => { throw new TypeError('Failed to fetch'); } });
  await assert.rejects(hook.igFetch('https://x/a'), { code: 'network' });
  ({ hook } = load({ fetchImpl: async () => { throw new DOMException('x', 'AbortError'); } }));
  await assert.rejects(hook.igFetch('https://x/a'), { name: 'AbortError' });
});

test('describeError is localized and falls back to unexpected', () => {
  const { hook } = load({ fetchImpl: async () => json({}) });
  const rl = new hook.IgError('rate_limited', 'apiRateLimited');
  assert.match(hook.describeError(rl), /temporarily limited requests/);
  hook.setLang('es');
  assert.match(hook.describeError(rl), /limitado temporalmente/);
  assert.match(hook.describeError(new Error('boom')), /error inesperado/);
  assert.ok(hook.isFatalApiError(rl));
  assert.ok(!hook.isFatalApiError(new hook.IgError('server', 'apiServerError')));
});
