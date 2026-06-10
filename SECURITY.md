# Security Policy

## Supported versions

Only the latest release is actively maintained. Please update before reporting a vulnerability.

| Version | Supported |
|---------|-----------|
| 1.1.x   | ✓         |
| < 1.1   | ✗         |

## Reporting a vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Report them privately via GitHub's [Security Advisories](../../security/advisories/new) feature. Include:

- A description of the vulnerability and its potential impact.
- Steps to reproduce or a proof-of-concept.
- The extension version and browser where you observed it.

You can expect an acknowledgement within **72 hours** and a status update within **7 days**.

## Scope

This extension runs entirely inside your browser and only communicates with `instagram.com` using your existing session cookies. There is no backend server, no telemetry, and no remote code loading.

Relevant attack surfaces include:

- Injection of malicious data through Instagram's API responses into the extension UI (XSS via DOM manipulation).
- Privilege escalation through the `scripting` or `activeTab` permissions.
- Any mechanism that could cause the extension to exfiltrate session cookies or credentials.

Out of scope: vulnerabilities in Instagram itself, browser-level bugs, or issues that require the attacker to have already compromised the user's machine.
