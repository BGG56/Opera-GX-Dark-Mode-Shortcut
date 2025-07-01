chrome.action.onClicked.addListener((tab) => {
    const url = tab.url;

    if (url.startsWith('chrome://') || url.startsWith('about:') || url.startsWith('edge://')) {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'Moon_Alert_Icon.png',
        title: 'Clipboard Copy Failed',
        message: 'Cannot access this type of URL: ' + url
    });
    return;
}

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
        navigator.clipboard.writeText(window.location.origin)
            .then(() => {
            chrome.runtime.sendMessage({ clipboardSuccess: true });
            })
            .catch((err) => {
            console.error(err);
            });
        }
    });
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.clipboardSuccess) {
        chrome.tabs.create({
            url: "opera://settings/content/forceDarkMode"
        });
    }
});