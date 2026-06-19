const test = require('node:test');
const assert = require('node:assert/strict');

const {
  normalizeUsername,
  compareLists,
  filterResults,
  updateVisibleSelection,
  toCsv
} = require('../src/core');

const users = [
  {
    username: 'Alpha.User',
    userId: '1',
    fullName: 'Alpha Creator',
    profileUrl: 'https://www.instagram.com/alpha.user/',
    isPrivate: false,
    isVerified: true
  },
  {
    username: 'beta',
    userId: '2',
    fullName: 'Beta Private',
    profileUrl: 'https://www.instagram.com/beta/',
    isPrivate: true,
    isVerified: false
  },
  {
    username: 'gamma',
    userId: '3',
    fullName: 'Another Account',
    profileUrl: 'https://www.instagram.com/gamma/',
    isPrivate: false,
    isVerified: false
  }
];

test('normalizeUsername trims, removes @ and lowercases', () => {
  assert.equal(normalizeUsername('  @Alpha.User '), 'alpha.user');
});

test('compareLists returns only accounts that do not follow back', () => {
  const result = compareLists(
    [{ username: 'ALPHA.USER' }, { username: 'someone-else' }],
    users
  );

  assert.deepEqual(result.map((user) => user.username), ['beta', 'gamma']);
});

test('filterResults supports text modes and account types', () => {
  assert.deepEqual(
    filterResults(users, { query: '@alpha', mode: 'starts' }).map((user) => user.username),
    ['Alpha.User']
  );
  assert.deepEqual(
    filterResults(users, { query: 'another account', mode: 'exact' }).map((user) => user.username),
    ['gamma']
  );
  assert.deepEqual(
    filterResults(users, { accountType: 'private' }).map((user) => user.username),
    ['beta']
  );
  assert.deepEqual(
    filterResults(users, { accountType: 'verified' }).map((user) => user.username),
    ['Alpha.User']
  );
});

test('updateVisibleSelection changes only visible accounts', () => {
  const selected = new Set(['alpha.user', 'gamma']);
  const deselected = updateVisibleSelection(selected, [users[0]], false);

  assert.deepEqual([...deselected].sort(), ['gamma']);
  assert.deepEqual([...selected].sort(), ['alpha.user', 'gamma']);

  const reselected = updateVisibleSelection(deselected, [users[1]], true);
  assert.deepEqual([...reselected].sort(), ['beta', 'gamma']);
});

test('toCsv quotes fields and escapes embedded quotes', () => {
  const csv = toCsv([{
    ...users[0],
    fullName: 'Alpha "Creator"'
  }]);

  assert.equal(
    csv,
    [
      'username,user_id,full_name,profile_url,is_private,is_verified',
      '"Alpha.User","1","Alpha ""Creator""","https://www.instagram.com/alpha.user/","false","true"'
    ].join('\n')
  );
});
