# Changelog

All notable changes to IG MutualCheck are documented in this file.

## [1.1.2] - 2026-10-28

### Fixed

- Fixed HTTP 429 errors when starting an analysis. The authenticated user ID
  is now taken from the session (`ds_user_id` cookie) instead of requesting
  `web_profile_info`, which remains only as a last-resort fallback. Identity
  is cached per session and refreshed when the Instagram account changes.
- Added typed API errors and `Retry-After` support. After a 429, IG MutualCheck
  stops all requests during a cooldown and recovers on its own when it ends.
- The unfollow process now stops on rate-limit, session, forbidden, and
  network errors instead of continuing with the next account.
- A failure now shows a single localized error message (Spanish and English)
  instead of two.

### Testing

- Added mocked tests for identity resolution, 429 handling, pagination
  failures, HTTP status mapping, network errors, and localized messages.

## [1.1.1] - 2026-06-19

IG MutualCheck 1.1.1 is a reliability and maintenance release focused on
safer recovery, responsive cancellation, accessibility, packaging, and
automated release delivery.

### Fixed

- Fixed extension recovery on Instagram tabs that were already open when the
  extension was installed or updated. The background worker now injects
  `core.js` before `content.js`, preserving the required dependency order.
- Fixed filtered actions so selecting all, copying usernames, and exporting
  CSV or JSON affect only the accounts visible under the active filters.
- Fixed duplicate document listeners being registered whenever the panel was
  closed and reopened.
- Replaced loose Instagram URL matching with strict HTTPS hostname validation.
- Added immediate cancellation for active Instagram requests and automatic
  delays. Canceling analysis or unfollow no longer waits for the current
  request or timer to finish.
- Preserved successfully completed unfollow operations when the remaining
  batch is canceled.
- Added clearer handling for expired sessions, forbidden requests, rate
  limits, server failures, missing CSRF tokens, and invalid API responses.

### Accessibility and interface

- Added a visible and accessible private-account badge.
- Exposed the extension panel as a named dialog with status and error live
  regions.
- Added initial focus, focus trapping, focus restoration, and Escape-to-close
  behavior.
- Added keyboard navigation and expanded-state semantics to the export menu.
- Added accessible labels for search, filters, language, export, and close
  controls.

### Testing and quality

- Extracted reusable normalization, comparison, filtering, selection, and CSV
  helpers into `src/core.js`.
- Added unit tests for core list behavior, filtered selection, CSV generation,
  service-worker URL validation, script recovery, and release-tag validation.
- Added syntax checks, package/manifest version consistency checks, and
  continuous integration through GitHub Actions.

### Packaging and releases

- Added minimal versioned ZIP packaging that excludes development dependencies
  and unrelated repository files.
- Added validation that release tags match the version declared in
  `package.json` and `manifest.json`.
- Added a tag-driven GitHub Actions workflow that runs checks, builds the ZIP,
  creates the GitHub Release, and uploads the package automatically.

### Verification

- 10 automated tests pass.
- 11 JavaScript files pass syntax validation.
- The extension package is generated as `ig-mutualcheck-v1.1.1.zip`.

