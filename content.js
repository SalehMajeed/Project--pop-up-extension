chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	let paragraphs = document.getElementsByTagName('p');
	for (elt of paragraphs) {
		elt.innerHTML = message.txt;
	}
}
