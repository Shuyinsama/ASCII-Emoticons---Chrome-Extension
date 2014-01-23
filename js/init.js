$(document).ready(function() {

	// List of default emotes supplied by SRT
	var emotes = [];
	// Custom Emote list defined in the options page (coming soon)
	var customEmotes = [];

	// Plugin wide variables
	var elemEmoteList = $("#emoteData");
	var tablink,
		copiedText;


	// Init function this will run first here we can make sure we have the correct variables to start
	function init() {
		
		// Get and insert the default list
		setupDefaultEmotes();
		// Bind event Listeners like click...
		bindEventListeners();

		// Filtering for the table
        $(".f_txt").table_filter({
            'table':'.f_tbl',
            'filter_inverse':false,
            'enable_space':true
        });

		// For eventual later API implementation (Twitch, UStream etc)

		// get the current tab url so we can do the correct action for multiple websites
		// for example we could add the emoticon straight to a twitch chat if we want.
		// this could also be implemented with a user option "allow insert in chat"
		chrome.tabs.getSelected(null, function(tab) {
			tablink = tab.url;
		});
	}

	// Binding event listeners to the Table Rows to make them clickable
	function bindEventListeners() {
		$('#emoteTable').on('click', 'tr', function(event) {
			var asciiSmiley = $(this).find("#asciiToCopy").text();
			/* Other Domain support coming soon */
			/* this checks if the current tab is twitch */
			if (tablink.indexOf("twitch") >= 0) {
				// if so then alert the user that the ascii
				// is pasted into their chat text area
				copiedText = "Pasted into twitch chat";
				// then actualy send the ascii to twitch
				// using injected content scripts
				sendToTab(asciiSmiley);
			} else {
				// if just any regular page we just copy the ascii
				// and yet again notify the user
				copiedText = "Your emote was copied to the clipboard";
				// and actualy copy the ascii to clipboard
				copyAscii(asciiSmiley);
			}
			// Start the animation for the alert message
			fadeInCopied(copiedText);
		});
	}

	// Populate with the defaul emotes
	function setupDefaultEmotes() {
		// Google Dev correct XHR Request for extensions
		var xhr = new XMLHttpRequest();
		// Load the external json
		xhr.open("GET", "https://dl.dropboxusercontent.com/s/rv3y76yrgippb95/emoticons.json", true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				// parse the json file
				var response = JSON.parse(xhr.responseText);
				// find the container where emotes are inserted
				container = elemEmoteList.find('.emoteList');
				// as a precaution empty the container
				container.html('');
				// loop through the json and insert the data
				for (i in response) {
					var data = response[i];
					// start at 1 instead of 0
					var index = parseInt(i)+1;
					container.append('<tr id="copy-ascii"><td>'+index+'</td><td class="cat-bar"><span class="'+data.category.toLowerCase()+'-cat">'+data.category+'</span></td><td>'+data.regex+'</td><td id="asciiToCopy">'+data.ascii+'</td></tr>');
				}
			}
		}
		xhr.send();
	}

	// Populates the list with all the emoticons from the array/JSON
	function addCustomAsciiEmotes(emotes) {
		// Custom Emote list
		container.append('<tr id="copy-ascii"><td></td><td class="cat-bar"><span class="custom-cat"></span></td><td></td><td id="asciiToCopy"></td></tr>');
	}

	// Animation function for the alert box
	function fadeInCopied(txt) {
		$( "#copied" ).html(txt).fadeIn(500).delay(1000).fadeOut(500);
	}

	// This function sends the ascii to twitch
	// Need to setup a conditional format for Twitch or UStream
	function sendToTab(ascii) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {emote: ascii}, function(response) {
				// you can also listen to a response given by the injected script if we want
			});
		});
	}

	// Copy function. basically what this does is bypass the Copy to Clipboard security in javascript.
	// Chrome extension are allowed to access the ClipboardData if the permissions are set in the manifest.
	// this function gets the selectes emoticon and puts it in a generated <textarea>, then it selects that textarea text
	// and copies the content. It is then removed from the page. This goes so fast you won't even see the <textarea>
	function copyAscii(str) {
		var sandbox = $('<textarea/>');
		sandbox.text(str);
		$("body").append(sandbox);
		sandbox.select();
		document.execCommand('copy');
		sandbox.remove();
	}

	// 3... 2... 1... LAUNCH! now ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ
	init();
});