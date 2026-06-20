const test = require('node:test');
const assert = require('node:assert/strict');

const { validateReleaseTag } = require('../scripts/check-release-tag');

test('accepts a tag matching the project version', () => {
  assert.equal(validateReleaseTag('v1.2.3', '1.2.3'), 'v1.2.3');
});

test('rejects missing and mismatched release tags', () => {
  assert.throws(
    () => validateReleaseTag('', '1.2.3'),
    /Release tag is required/
  );
  assert.throws(
    () => validateReleaseTag('v1.2.2', '1.2.3'),
    /does not match project version/
  );
});
