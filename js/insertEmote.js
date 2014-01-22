/******************************
* Inject a listener event  into 
* twitch  (currently)  and  get
* the selected emote and insert
* that  into the chat  textarea
*******************************/

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
	if (request.emote) {
		var emoteSpace = ' '+request.emote+' ';
		document.getElementById("chat_text_input").value += emoteSpace;
	}
});