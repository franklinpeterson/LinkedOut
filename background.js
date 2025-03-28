chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "run") {
        chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {action: "run"})
        });
    }
    if (message.action === "connect") {
        chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {action: "connect"})
        });
    }
});