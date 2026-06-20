const fs = require('node:fs');
const path = require('node:path');

function extractReleaseNotes(changelog, version) {
  const heading = `## [${version}]`;
  const start = changelog.indexOf(heading);

  if (start === -1) {
    throw new Error(`No changelog section found for version ${version}.`);
  }

  const nextHeading = changelog.indexOf('\n## [', start + heading.length);
  const section = changelog.slice(start, nextHeading === -1 ? undefined : nextHeading);
  const bodyStart = section.indexOf('\n');

  return section.slice(bodyStart + 1).trim();
}

if (require.main === module) {
  const projectRoot = path.resolve(__dirname, '..');
  const version = process.argv[2];
  const outputPath = process.argv[3];

  if (!version || !outputPath) {
    throw new Error('Usage: node scripts/get-release-notes.js <version> <output-path>');
  }

  const changelog = fs.readFileSync(path.join(projectRoot, 'CHANGELOG.md'), 'utf8');
  const notes = extractReleaseNotes(changelog, version);
  const resolvedOutput = path.resolve(projectRoot, outputPath);

  fs.mkdirSync(path.dirname(resolvedOutput), { recursive: true });
  fs.writeFileSync(resolvedOutput, `${notes}\n`);
  console.log(`Created release notes for v${version} at ${path.relative(projectRoot, resolvedOutput)}.`);
}

module.exports = { extractReleaseNotes };
