const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const STORE_DIR = path.join(__dirname, '..', 'store-assets');

const panelHtml = `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1280px;
    height: 800px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    background: #fafafa;
    overflow: hidden;
  }

  .ig-bar {
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  .ig-logo { font-size: 22px; font-weight: 700; font-family: 'Segoe UI', sans-serif; }
  .ig-search {
    margin-left: 240px;
    width: 268px;
    height: 36px;
    border-radius: 8px;
    background: #efefef;
    border: none;
    padding: 0 16px;
    font-size: 14px;
    color: #8e8e8e;
  }

  .ig-content {
    display: flex;
    height: 740px;
  }
  .ig-sidebar {
    width: 244px;
    border-right: 1px solid #dbdbdb;
    background: #fff;
    padding: 24px 16px;
  }
  .ig-nav-item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 12px;
    border-radius: 8px;
    font-size: 15px;
    color: #262626;
    cursor: default;
  }
  .ig-nav-item.active { font-weight: 700; }
  .ig-nav-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #dbdbdb;
  }
  .ig-feed {
    flex: 1;
    background: #fafafa;
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
  .ig-post {
    width: 470px;
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    overflow: hidden;
  }
  .ig-post-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
  }
  .ig-post-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
  }
  .ig-post-user { font-weight: 600; font-size: 14px; }
  .ig-post-image {
    width: 100%;
    height: 380px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  .ig-post-actions {
    padding: 12px 16px;
    display: flex;
    gap: 16px;
  }
  .ig-post-action {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background: #262626;
  }

  #ifc-root {
    position: fixed;
    right: 24px;
    bottom: 24px;
    width: 420px;
    height: 720px;
    background: #ffffff;
    color: #111827;
    border: 1px solid #e5e7eb;
    box-shadow: 0 24px 70px rgba(0,0,0,.24);
    border-radius: 18px;
    z-index: 9999;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .ifc-header {
    padding: 16px 18px;
    border-bottom: 1px solid #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .ifc-title { font-size: 15px; font-weight: 800; }
  .ifc-subtitle {
    display: inline-flex;
    margin-top: 7px;
    padding: 6px 10px;
    border: 1px solid #dbeafe;
    border-radius: 999px;
    background: linear-gradient(90deg, #eff6ff, #ffffff);
    color: #1f2937;
    font-size: 13px;
    font-weight: 750;
  }
  .ifc-header-right { display: flex; align-items: center; gap: 8px; }
  .ifc-language {
    border: 1px solid #e5e7eb;
    background: #fff;
    border-radius: 999px;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    cursor: pointer;
  }
  .ifc-close {
    border: 0;
    background: #f3f4f6;
    width: 30px;
    height: 30px;
    border-radius: 999px;
    font-size: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .ifc-body { padding: 16px 18px; overflow-y: auto; flex: 1; }

  .ifc-actions {
    display: grid;
    grid-template-columns: minmax(0,1.08fr) minmax(0,.78fr) minmax(0,.92fr) minmax(0,.78fr);
    gap: 8px;
    margin-bottom: 10px;
  }
  .ifc-btn {
    border: 0;
    border-radius: 10px;
    padding: 9px 9px;
    font-size: 12px;
    font-weight: 650;
    text-align: center;
    cursor: pointer;
  }
  .ifc-btn-primary { background: #111827; color: #fff; }
  .ifc-btn-secondary { background: #f3f4f6; color: #111827; }
  .ifc-btn-danger { background: #fee2e2; color: #991b1b; }

  .ifc-status {
    color: #1f2937;
    font-size: 13px;
    margin-bottom: 12px;
    padding: 11px 12px;
    border: 1px solid #bfdbfe;
    background: linear-gradient(90deg, #eff6ff, #ffffff, #eff6ff);
    border-radius: 12px;
    font-weight: 600;
  }

  .ifc-metrics {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 8px;
    margin-bottom: 12px;
  }
  .ifc-metric {
    border: 1px solid #f3f4f6;
    background: #fafafa;
    border-radius: 12px;
    padding: 10px;
  }
  .ifc-metric-value { font-size: 18px; font-weight: 800; }
  .ifc-metric-label { font-size: 11px; color: #6b7280; margin-top: 3px; }

  .ifc-list-box {
    margin-top: 10px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #fff;
    overflow: hidden;
  }
  .ifc-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-bottom: 1px solid #f3f4f6;
    background: #fafafa;
    font-size: 12px;
    font-weight: 700;
    color: #374151;
  }
  .ifc-list { max-height: 260px; overflow: hidden; }
  .ifc-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 12px;
    border-bottom: 1px solid #f3f4f6;
  }
  .ifc-row:last-child { border-bottom: 0; }
  .ifc-user-wrap { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1; }
  .ifc-checkbox { width: 16px; height: 16px; accent-color: #111827; }
  .ifc-avatar-fallback {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dbeafe;
    background: linear-gradient(135deg, #e0f2fe, #eff6ff);
    color: #1e3a8a;
    font-size: 12px;
    font-weight: 800;
    flex: 0 0 auto;
  }
  .ifc-user { min-width: 0; flex: 1; }
  .ifc-username { font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 5px; }
  .ifc-fullname { color: #6b7280; font-size: 12px; margin-top: 2px; }
  .ifc-open { border: 0; background: transparent; color: #2563eb; font-size: 12px; font-weight: 700; cursor: pointer; }

  .ifc-verified-badge { display: inline-flex; width: 17px; height: 17px; }
  .ifc-verified-star { fill: #0095f6; }
  .ifc-verified-check { fill: #fff; }

  .ifc-footer {
    padding: 12px 18px;
    border-top: 1px solid #f3f4f6;
    color: #6b7280;
    font-size: 11px;
    line-height: 1.45;
    background: #fff;
    text-align: justify;
  }
  .ifc-copyright {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed #e5e7eb;
    text-align: center;
    color: #4b5563;
    font-size: 10.5px;
    font-weight: 600;
  }
  .ifc-copyright a { color: #2563eb; text-decoration: none; font-weight: 800; }
</style>
</head>
<body>

<div class="ig-bar">
  <span class="ig-logo">Instagram</span>
  <input class="ig-search" value="Search" readonly />
</div>
<div class="ig-content">
  <div class="ig-sidebar">
    <div class="ig-nav-item active"><div class="ig-nav-icon"></div> Home</div>
    <div class="ig-nav-item"><div class="ig-nav-icon"></div> Search</div>
    <div class="ig-nav-item"><div class="ig-nav-icon"></div> Explore</div>
    <div class="ig-nav-item"><div class="ig-nav-icon"></div> Reels</div>
    <div class="ig-nav-item"><div class="ig-nav-icon"></div> Messages</div>
    <div class="ig-nav-item"><div class="ig-nav-icon"></div> Notifications</div>
    <div class="ig-nav-item"><div class="ig-nav-icon"></div> Profile</div>
  </div>
  <div class="ig-feed">
    <div class="ig-post">
      <div class="ig-post-header">
        <div class="ig-post-avatar"></div>
        <span class="ig-post-user">sample.user</span>
      </div>
      <div class="ig-post-image"></div>
      <div class="ig-post-actions">
        <div class="ig-post-action"></div>
        <div class="ig-post-action"></div>
        <div class="ig-post-action"></div>
      </div>
    </div>
  </div>
</div>

<div id="ifc-root">
  <div class="ifc-header">
    <div>
      <p class="ifc-title">IG MutualCheck</p>
      <div class="ifc-subtitle">Account: @your.username</div>
    </div>
    <div class="ifc-header-right">
      <button class="ifc-language">EN</button>
      <button class="ifc-close">&times;</button>
    </div>
  </div>

  <div class="ifc-body">
    <div class="ifc-actions">
      <button class="ifc-btn ifc-btn-primary">Analyze account</button>
      <button class="ifc-btn ifc-btn-danger">Cancel</button>
      <button class="ifc-btn ifc-btn-secondary">Copy list</button>
      <button class="ifc-btn ifc-btn-secondary">Export</button>
    </div>

    <div class="ifc-status">Analysis complete. 18 accounts do not follow you back.</div>

    <div class="ifc-metrics">
      <div class="ifc-metric"><div class="ifc-metric-value">847</div><div class="ifc-metric-label">Followers</div></div>
      <div class="ifc-metric"><div class="ifc-metric-value">412</div><div class="ifc-metric-label">Following</div></div>
      <div class="ifc-metric"><div class="ifc-metric-value">18</div><div class="ifc-metric-label">Not following back</div></div>
    </div>

    <div class="ifc-list-box">
      <div class="ifc-list-header">
        <span>Detected accounts</span>
        <span>18 selected</span>
      </div>
      <div class="ifc-list">
        <div class="ifc-row">
          <div class="ifc-user-wrap">
            <input class="ifc-checkbox" type="checkbox" checked />
            <span class="ifc-avatar-fallback">T</span>
            <div class="ifc-user">
              <div class="ifc-username">
                <span>@travel.adventures</span>
                <span class="ifc-verified-badge"><svg viewBox="0 0 24 24"><path class="ifc-verified-star" d="M12 1.7l2.15 2.03 2.96-.39 1.1 2.77 2.73 1.23-.76 2.89L22 12.6l-1.82 2.37.76 2.89-2.73 1.23-1.1 2.77-2.96-.39L12 23.5l-2.15-2.03-2.96.39-1.1-2.77-2.73-1.23.76-2.89L2 12.6l1.82-2.37-.76-2.89 2.73-1.23 1.1-2.77 2.96.39L12 1.7z"/><path class="ifc-verified-check" d="M10.35 15.35l-3-3 1.35-1.35 1.65 1.65 4.95-4.95 1.35 1.35-6.3 6.3z"/></svg></span>
              </div>
              <div class="ifc-fullname">Travel Adventures</div>
            </div>
          </div>
          <button class="ifc-open">Open</button>
        </div>
        <div class="ifc-row">
          <div class="ifc-user-wrap">
            <input class="ifc-checkbox" type="checkbox" checked />
            <span class="ifc-avatar-fallback">F</span>
            <div class="ifc-user">
              <div class="ifc-username"><span>@fitness.daily</span></div>
              <div class="ifc-fullname">Fitness Daily</div>
            </div>
          </div>
          <button class="ifc-open">Open</button>
        </div>
        <div class="ifc-row">
          <div class="ifc-user-wrap">
            <input class="ifc-checkbox" type="checkbox" checked />
            <span class="ifc-avatar-fallback">D</span>
            <div class="ifc-user">
              <div class="ifc-username"><span>@design.studio</span></div>
              <div class="ifc-fullname">Design Studio</div>
            </div>
          </div>
          <button class="ifc-open">Open</button>
        </div>
        <div class="ifc-row">
          <div class="ifc-user-wrap">
            <input class="ifc-checkbox" type="checkbox" checked />
            <span class="ifc-avatar-fallback">M</span>
            <div class="ifc-user">
              <div class="ifc-username"><span>@music.vibes</span></div>
              <div class="ifc-fullname">Music Vibes</div>
            </div>
          </div>
          <button class="ifc-open">Open</button>
        </div>
        <div class="ifc-row">
          <div class="ifc-user-wrap">
            <input class="ifc-checkbox" type="checkbox" checked />
            <span class="ifc-avatar-fallback">C</span>
            <div class="ifc-user">
              <div class="ifc-username"><span>@code.daily</span></div>
              <div class="ifc-fullname">Code Daily</div>
            </div>
          </div>
          <button class="ifc-open">Open</button>
        </div>
      </div>
    </div>
  </div>

  <div class="ifc-footer">
    <div>The extension uses your active Instagram session from the browser. It does not request your password or store credentials.</div>
    <div class="ifc-copyright">&copy; 2026 Juan Diego Castellanos &middot; <a>github.com/juandiegoc30</a></div>
  </div>
</div>

</body>
</html>
`;

async function main() {
  if (!fs.existsSync(STORE_DIR)) fs.mkdirSync(STORE_DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  await page.setContent(panelHtml, { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: path.join(STORE_DIR, 'screenshot-1-analysis.png'), fullPage: false });

  console.log(`Screenshots saved to ${STORE_DIR}/`);
  await browser.close();
}

main().catch((err) => { console.error(err); process.exit(1); });
