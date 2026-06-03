# Instagram Followback Checker

A local Chrome/Edge extension that analyzes your authenticated Instagram account and shows which accounts you follow that don't follow you back.

> 🌐 También disponible en [Español](README.es.md)

## Features

- Automatic detection of the authenticated account.
- Bilingual interface: English and Spanish.
- Language selector with flag: 🇺🇸 EN / 🇪🇸 ES.
- Language preference persisted with `chrome.storage.local`.
- Follower, following, and non-followback count.
- Filters by text, match type, and account type.
- Select all and individual checkboxes.
- Export to CSV and JSON.
- Copy list to clipboard.
- Unfollow selected accounts with automatic pauses.

## Local Installation

1. Unzip the project folder.
2. Open `chrome://extensions/` or `edge://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project folder.
6. Open `https://www.instagram.com/` while logged in.
7. Click the extension icon.

## Usage

1. Open Instagram Web while logged in.
2. Click the extension icon.
3. Switch language with the flag selector if desired.
4. Press **Analyze my account**.
5. Review accounts that don't follow you back.
6. Use filters to search by username, display name, verification status, or account privacy.
7. Uncheck any accounts you don't want to unfollow.
8. Press **Unfollow selected** to execute the action.

The language is automatically detected from the browser. Spanish browsers start in Spanish; all others default to English.

## How It Works

### Architecture

The extension is built on **Manifest V3** and consists of two scripts:

| File | Role |
|---|---|
| `src/background.js` | Service worker. Listens for toolbar icon clicks and injects `content.js` into the active Instagram tab if it is not already loaded. Sends a toggle message to show/hide the panel. |
| `src/content.js` | Runs inside the Instagram tab. Builds and manages the entire UI panel, calls the Instagram API, and handles all logic. |

### Permissions

| Permission | Purpose |
|---|---|
| `activeTab` | Access the currently active Instagram tab |
| `scripting` | Inject `content.js` on demand when the icon is clicked |
| `storage` | Persist the language preference via `chrome.storage.local` |

### API Calls

All requests hit Instagram's internal REST API at `https://www.instagram.com/api/v1` and reuse the browser's active session cookies (`credentials: 'include'`). No OAuth flow or password is involved.

| Endpoint | Method | Purpose |
|---|---|---|
| `/accounts/edit/web_form_data/` | GET | Detect the authenticated username and user ID from the current session |
| `/users/web_profile_info/?username=…` | GET | Resolve user ID from username when not returned by the previous call |
| `/friendships/{userId}/followers/` | GET | Paginated fetch of followers (50 per page, cursor-based via `next_max_id`) |
| `/friendships/{userId}/following/` | GET | Paginated fetch of following (50 per page, cursor-based via `next_max_id`) |
| `/friendships/destroy/{userId}/` | POST | Unfollow a single account |

Every GET page request includes a 1.1 s automatic pause to avoid hitting rate limits. POST (unfollow) requests include the `x-csrftoken` header read from the browser's `csrftoken` cookie.

### Analysis Logic

1. Fetch the full followers list into a `Set` of normalised usernames.
2. Fetch the full following list.
3. Filter the following list to entries not present in the followers `Set`.

### UI

The panel is injected into the page DOM at runtime - no `popup.html` is used. All styles are scoped under `#ifc-root` and injected via a `<style>` tag to avoid conflicts with Instagram's own CSS.

## Security & Privacy

### Data protection

| Guarantee | Detail |
|---|---|
| **No credentials collected** | The extension never asks for your password or any login token. Authentication relies entirely on the cookies that Instagram itself already set in your browser. |
| **No external servers** | Every API call goes directly from your browser to `instagram.com`. No proxy, no third-party backend, no analytics endpoint. Data never leaves your machine except to reach Instagram's own servers. |
| **No persistent storage of personal data** | The only value written to `chrome.storage.local` is the UI language preference (`en` or `es`). Follower and following lists are kept in memory while the panel is open and discarded when the tab is closed or the panel is reset. |
| **Minimal permissions** | The extension requests only three permissions - `activeTab`, `scripting`, and `storage` - each scoped to the minimum required. No broad host access beyond `instagram.com` is declared. |
| **CSRF protection on writes** | Unfollow requests (the only state-mutating action) include the `x-csrftoken` header sourced from the browser's own `csrftoken` cookie, matching Instagram's expected CSRF mitigation. |
| **No remote code execution** | The extension contains no remote script loading, no `eval`, and no dynamic code injection. All logic ships in the local extension bundle. |
| **Inspectable source** | The project is fully open source. You can audit every API call and every piece of logic directly in `src/content.js` and `src/background.js` before loading the extension. |

### Rate limiting

Instagram may temporarily restrict your account if too many unfollow actions are performed in a short period. Use the **Balanced** speed option to reduce this risk. If errors occur, wait a few minutes before retrying.
