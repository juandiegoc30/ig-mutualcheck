chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !tab.url || !tab.url.includes('instagram.com')) {
    return;
  }

  await chrome.tabs.sendMessage(tab.id, {
    type: 'IFC_TOGGLE_PANEL'
  }).catch(async () => {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['src/content.js']
    });

    await chrome.tabs.sendMessage(tab.id, {
      type: 'IFC_TOGGLE_PANEL'
    });
  });
});
