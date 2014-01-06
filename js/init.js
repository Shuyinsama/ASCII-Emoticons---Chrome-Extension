$(document).ready(function() {

	// List of emotes we should be able to load this externally from dropbox for instance
	var emotes = [
		{
			ascii: '(ノಠ益ಠ)ノ彡┻━┻',
			regex: 'TableFlip'
		},
		{
			ascii: '┬─┬ノ( º _ ºノ)',
			regex: 'TableBack'
		},
		{
			ascii: 'ლ(ಠ益ಠლ)',
			regex: 'WeirdFace'
		},
		{
			ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
			regex: 'Dongers'
		},
		{
			ascii: '( ͡ °͜ʖ ͡° )',
			regex: 'SmoothFace'
		},
		{
			ascii: '¯_(ツ)_/¯',
			regex: 'Something'
		},
		{
			ascii: '┬─┬ノ( º _ ºノ)',
			regex: 'TableBack'
		},
		{
			ascii: 'ლ(ಠ益ಠლ)',
			regex: 'WeirdFace'
		},
		{
			ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
			regex: 'Dongers'
		},
		{
			ascii: '( ͡ °͜ʖ ͡° )',
			regex: 'SmoothFace'
		},
		{
			ascii: '¯_(ツ)_/¯',
			regex: 'Something'
		},
		{
			ascii: '┬─┬ノ( º _ ºノ)',
			regex: 'TableBack'
		},
		{
			ascii: 'ლ(ಠ益ಠლ)',
			regex: 'WeirdFace'
		},
		{
			ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
			regex: 'Dongers'
		},
		{
			ascii: '( ͡ °͜ʖ ͡° )',
			regex: 'SmoothFace'
		},
		{
			ascii: '¯_(ツ)_/¯',
			regex: 'Something'
		},
		{
			ascii: '┬─┬ノ( º _ ºノ)',
			regex: 'TableBack'
		},
		{
			ascii: 'ლ(ಠ益ಠლ)',
			regex: 'WeirdFace'
		},
		{
			ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
			regex: 'Dongers'
		},
		{
			ascii: '( ͡ °͜ʖ ͡° )',
			regex: 'SmoothFace'
		},
		{
			ascii: '¯_(ツ)_/¯',
			regex: 'Something'
		},
		{
			ascii: '┬─┬ノ( º _ ºノ)',
			regex: 'TableBack'
		},
		{
			ascii: 'ლ(ಠ益ಠლ)',
			regex: 'WeirdFace'
		},
		{
			ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
			regex: 'Dongers'
		},
		{
			ascii: '( ͡ °͜ʖ ͡° )',
			regex: 'SmoothFace'
		},
		{
			ascii: '¯_(ツ)_/¯',
			regex: 'Something'
		},
		{
			ascii: '┬─┬ノ( º _ ºノ)',
			regex: 'TableBack'
		},
		{
			ascii: 'ლ(ಠ益ಠლ)',
			regex: 'WeirdFace'
		},
		{
			ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
			regex: 'Dongers'
		},
		{
			ascii: '( ͡ °͜ʖ ͡° )',
			regex: 'SmoothFace'
		},
		{
			ascii: '¯_(ツ)_/¯',
			regex: 'Something'
		},
		{
			ascii: '┬─┬ノ( º _ ºノ)',
			regex: 'TableBack'
		},
		{
			ascii: 'ლ(ಠ益ಠლ)',
			regex: 'WeirdFace'
		},
		{
			ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
			regex: 'Dongers'
		},
		{
			ascii: '( ͡ °͜ʖ ͡° )',
			regex: 'SmoothFace'
		},
		{
			ascii: '¯_(ツ)_/¯',
			regex: 'Something'
		}

	]

	// Plugin wide variables
	var elemEmoteList = $("#emoteData");
	var tablink;


	// Init function this will run first here we can make sure we have the correct variables to start
	function init() {

		addAsciiEmotes();
		bindEventListeners();

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
			copyAscii(asciiSmiley);
		});
	}


	// Populates the list with all the emoticons from the array
	function addAsciiEmotes() {
		var container;

		// Add all emotes.
        container = elemEmoteList.find('.emoteList');
        container.html('');
        for (i in emotes) {
       		var elemAscii = emotes[i];
        	container.append('<tr id="copy-ascii"><td>'+i+'</td><td>'+elemAscii.regex+'</td><td id="asciiToCopy">'+elemAscii.ascii+'</td></tr>');
        }
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

	init();
});