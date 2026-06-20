const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadBackground({ sendMessage, executeScript }) {
  let clickHandler;
  const context = {
    URL,
    chrome: {
      action: {
        onClicked: {
          addListener(handler) {
            clickHandler = handler;
          }
        }
      },
      tabs: { sendMessage },
      scripting: { executeScript }
    }
  };

  const source = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'background.js'),
    'utf8'
  );
  vm.runInNewContext(source, context);

  return clickHandler;
}

test('ignores tabs outside the exact Instagram origin', async () => {
  let messages = 0;
  const handler = loadBackground({
    sendMessage: async () => { messages += 1; },
    executeScript: async () => {}
  });

  await handler({ id: 1, url: 'https://notinstagram.com/' });
  await handler({ id: 2, url: 'http://www.instagram.com/' });

  assert.equal(messages, 0);
});

test('toggles the panel directly when the content script is available', async () => {
  const messages = [];
  const handler = loadBackground({
    sendMessage: async (tabId, message) => {
      messages.push({ tabId, message });
    },
    executeScript: async () => assert.fail('injection should not run')
  });

  await handler({ id: 7, url: 'https://www.instagram.com/' });

  assert.equal(messages.length, 1);
  assert.equal(messages[0].tabId, 7);
  assert.equal(messages[0].message.type, 'IFC_TOGGLE_PANEL');
});

test('injects core before content when the initial message fails', async () => {
  const calls = [];
  let messageAttempts = 0;
  const handler = loadBackground({
    sendMessage: async (tabId, message) => {
      messageAttempts += 1;
      calls.push({ type: 'message', tabId, message });
      if (messageAttempts === 1) throw new Error('No receiver');
    },
    executeScript: async (details) => {
      calls.push({ type: 'injection', details });
    }
  });

  await handler({ id: 9, url: 'https://www.instagram.com/explore/' });

  assert.equal(calls[1].type, 'injection');
  assert.deepEqual(
    Array.from(calls[1].details.files),
    ['src/core.js', 'src/content.js']
  );
  assert.equal(calls[2].type, 'message');
});
