function isInstagramUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname === 'www.instagram.com';
  } catch (_) {
    return false;
  }
}

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !isInstagramUrl(tab.url)) {
    return;
  }

  await chrome.tabs.sendMessage(tab.id, {
    type: 'IFC_TOGGLE_PANEL'
  }).catch(async () => {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['src/core.js', 'src/content.js']
    });

    await chrome.tabs.sendMessage(tab.id, {
      type: 'IFC_TOGGLE_PANEL'
    });
  });
});
