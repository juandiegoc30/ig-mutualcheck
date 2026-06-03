# Usage Guide

> 🌐 También disponible en [Español](USAGE.es.md)

## Requirements

- Google Chrome or Microsoft Edge.
- The extension loaded in developer mode (see [README](../README.md) for installation steps).
- An active Instagram session open at `https://www.instagram.com/`.

---

## Opening the Extension

1. Navigate to `https://www.instagram.com/` and make sure you are logged in.
2. Click the extension icon in the browser toolbar.  
   The panel slides in from the right side of the page.  
   Clicking the icon again, or pressing **Close**, hides the panel.

---

## Language

The interface is available in **English** and **Spanish**.  
On first load, the language is detected automatically from the browser's locale — Spanish browsers start in Spanish, all others default to English.

To switch manually, click the flag button (🇺🇸 / 🇪🇸) in the top-right corner of the panel. The preference is saved and restored on future visits.

---

## Analyzing Your Account

1. Press **Analyze account**.  
   The extension reads your followers and following lists directly through the active Instagram session. No password or additional credentials are needed.
2. Status messages appear while data is loading:
   - *Detecting authenticated account…*
   - *Reading followers of @username… N found.*
   - *Reading accounts followed by @username… N found.*
3. When finished, a summary bar shows:
   | Label | Meaning |
   |---|---|
   | **Followers** | Total accounts that follow you |
   | **Following** | Total accounts you follow |
   | **Not following back** | Accounts you follow that do not follow you back |

4. The list below the summary displays every non-followback account with their profile picture, display name, username, and badges for **verified** ✓ and **private** 🔒 accounts.

> **Cancel at any time** by pressing **Cancel** while loading is in progress.

---

## Filtering Results

Use the controls above the list to narrow down results before acting.

### Text search

Type in the search box to filter by **username** or **display name**.  
Choose the match mode with the radio buttons:

| Mode | Behavior |
|---|---|
| **Contains** | Shows entries that include the typed text anywhere |
| **Starts with** | Shows entries whose username or name begins with the typed text |
| **Exact match** | Shows only entries that match the full text exactly |

Press **Clear filter** to reset the search.

### Account type

Filter the list to show only a specific kind of account:

| Option | Shows |
|---|---|
| **All** | Every non-followback account |
| **Verified** | Accounts with the verified badge |
| **Not verified** | Accounts without a verified badge |
| **Private** | Accounts with a private profile |
| **Public** | Accounts with a public profile |

The status bar below the filters shows how many results are currently visible (e.g. *Showing 12 of 47 results*).

---

## Selecting Accounts

- **Select all** checkbox at the top of the list selects or deselects every visible entry at once.
- Individual checkboxes let you include or exclude specific accounts.
- The counter below the list tracks the current selection (e.g. *10 of 47 selected*).

Uncheck any account you want to keep following before proceeding.

---

## Exporting and Copying

Click **Export** to open the export options:

| Action | Output |
|---|---|
| **Export CSV** | Downloads a `.csv` file with username, display name, verified status, and private status for every account in the current (filtered) list |
| **Export JSON** | Downloads a `.json` file with the same data |
| **Copy list** | Copies all usernames in the current list to the clipboard |

Exports reflect the active filter — only accounts currently visible are included.

---

## Unfollowing

1. Make sure the accounts you want to unfollow are **checked**.
2. Choose an unfollow speed:
   | Speed | Delay between accounts |
   |---|---|
   | **Balanced** *(recommended)* | 5 - 8 seconds per account |
   | **Fast** | 2.5 - 4.5 seconds per account |
3. Press **Unfollow selected**.
4. A confirmation dialog summarises how many accounts will be unfollowed and the selected speed. Confirm to proceed.
5. Progress messages appear for each account: *Unfollowing @username (N/total)…*
6. Press **Cancel** at any time to stop mid-process.
7. A final message reports how many accounts were unfollowed successfully and how many failed.

> **Note:** Instagram may temporarily rate-limit your account if too many unfollow actions are performed in a short period. The **Balanced** speed reduces this risk. If you see errors, wait a while before retrying.

---

## Privacy & Security

- The extension operates entirely within your browser using your **active Instagram session**.
- It does **not** ask for your password, store credentials, or send any data to external servers.
- All processing happens locally in the browser tab.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Panel does not open | Extension not loaded or page not instagram.com | Reload the page and try again; confirm the extension is enabled |
| "Account: not detected" | Not logged in to Instagram | Log in at instagram.com and reload the page |
| Analysis fails or is incomplete | Session expired or Instagram rate limit | Log out and back in, or wait a few minutes and retry |
| Unfollow errors for some accounts | Temporary Instagram restriction | Wait 10-15 minutes before retrying those accounts |
| Language does not change | Browser cache | Click the flag button manually to override |
