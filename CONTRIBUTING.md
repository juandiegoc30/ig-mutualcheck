# Contributing to Instagram Followback Checker

Thank you for your interest in contributing. This is a small, focused Chrome/Edge extension — contributions that keep it simple and privacy-first are welcome.

## What can I contribute?

- Bug fixes
- Translations (new languages for the extension UI)
- Improvements to the landing page (`docs/`)
- Documentation fixes

If you have a larger feature idea, open an issue first to discuss it before writing code.

## Getting started

1. Fork the repository and clone your fork.
2. Load the extension unpacked in Chrome or Edge:
   - Open `chrome://extensions/` and enable **Developer mode**.
   - Click **Load unpacked** and select the project folder.
3. Open `https://www.instagram.com/` while logged in and click the extension icon.

There is no build step. All logic lives in `src/content.js` and `src/background.js`.

## Making changes

- Keep changes focused. One concern per pull request.
- Test the extension manually on a real Instagram session before submitting.
- If you modify the UI, verify both English and Spanish strings are updated in `src/content.js`.
- Do not commit `node_modules/` or any generated zip files.

## Submitting a pull request

1. Create a branch from `main` with a descriptive name (e.g. `fix/rate-limit-handling`).
2. Write a clear PR description explaining what changed and why.
3. Reference any related issue with `Closes #<number>`.

## Code style

- Plain JavaScript (no TypeScript, no bundler).
- Prefer clarity over cleverness — this code runs in people's browsers against their accounts.
- No external dependencies in `src/`. The extension must work fully offline after installation.

## Reporting issues

Use the [issue templates](.github/ISSUE_TEMPLATE/) instead of opening a blank issue. It helps resolve things faster.
