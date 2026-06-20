const path = require('node:path');

function validateReleaseTag(tag, version) {
  const expectedTag = `v${version}`;

  if (!tag) {
    throw new Error(`Release tag is required. Expected ${expectedTag}.`);
  }

  if (tag !== expectedTag) {
    throw new Error(`Release tag ${tag} does not match project version ${expectedTag}.`);
  }

  return expectedTag;
}

if (require.main === module) {
  const projectRoot = path.resolve(__dirname, '..');
  const packageJson = require(path.join(projectRoot, 'package.json'));
  const manifest = require(path.join(projectRoot, 'manifest.json'));
  const tag = process.argv[2] || process.env.RELEASE_TAG || process.env.GITHUB_REF_NAME;

  if (packageJson.version !== manifest.version) {
    throw new Error(
      `Version mismatch: package.json=${packageJson.version}, manifest.json=${manifest.version}`
    );
  }

  const validTag = validateReleaseTag(tag, manifest.version);
  console.log(`Release tag ${validTag} matches project version.`);
}

module.exports = { validateReleaseTag };
