const test = require('node:test');
const assert = require('node:assert/strict');

const { extractReleaseNotes } = require('../scripts/get-release-notes');

test('extracts only the requested changelog section', () => {
  const changelog = [
    '# Changelog',
    '',
    '## [2.0.0] - 2026-01-02',
    '',
    'Second release.',
    '',
    '## [1.0.0] - 2026-01-01',
    '',
    'First release.'
  ].join('\n');

  assert.equal(extractReleaseNotes(changelog, '2.0.0'), 'Second release.');
  assert.equal(extractReleaseNotes(changelog, '1.0.0'), 'First release.');
});

test('rejects a version missing from the changelog', () => {
  assert.throws(
    () => extractReleaseNotes('# Changelog\n', '3.0.0'),
    /No changelog section found/
  );
});
