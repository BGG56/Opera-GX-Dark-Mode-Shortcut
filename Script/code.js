const sites = [];
const site = window.location.href;
const button = document.getElementById("Button");

console.log("Current site:", site);

button.addEventListener("click", () => {
    console.log("Button clicked");

    chrome.tabs.create({ url: "opera://settings/content/forceDarkMode" });
    console.log("New tab opened with URL: opera://settings/content/forceDarkMode");
    //chrome.windows.create({ url: "opera://settings/content/forceDarkMode", type: "normal" }); // spróbować zminimalizować lub ukryć 

    sites += document.getElementById("url-directionality").textContent;
    console.log("Current URL added to the list:", sites);

    if (sites.includes(site)) {
        console.log("Site already exists in the list.");
    } else {
        sites.push(site);
        console.log("Site added to the list:", site);
    }
});


















// document.getElementById("myButton").addEventListener("click", () => {
//     chrome.runtime.sendMessage({ action: true });
// });


// chrome.runtime.onMessage.addListener((request, sender) => {
//     if (request.action) {
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//             const currentUrl = new URL(tabs[0]?.url).origin;
//             console.log('Current URL:', currentUrl);

//             //new tab
//             //chrome.tabs.create({ url: "opera://settings/content/forceDarkMode" });

//             //new window
//             chrome.windows.create({ url: "opera://settings/content/forceDarkMode", type: "normal" }); // spróbować zminimalizować lub ukryć 

//             console.log('Url opened');
//             //Url not present in the list
//             sleep(100);
//             let button = document.getElementsByClass("header-aligned-button");
//             console.log("Button set");
//             button[0].click();
//             console.log("Button clicked");
//             sleep(100);
//             document.getElementById("input").value = currentUrl;
//             console.log("Input ser");
//             //document.getElementById("input").innerText(currentUrl); - test
//             document.getElementById("add").click();
//             console.log("URL added");
//             sleep(100);

//             chrome.tabs.remove(tabId);
//             //chrome.windows.getCurrent(function (window) {
//             //    chrome.windows.remove(window.id);
//             //});

//         });
//     }
// });

// function sleep(ms) {
//     return new Promise(r => setTimeout(r, ms));
// }
