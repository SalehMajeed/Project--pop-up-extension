chrome.browserAction.onClicked.addListener(button_clicked);

function button_clicked(tab) {
	let msg = {};
	chrome.tabs.sendMessage(tab.id, msg);
}
