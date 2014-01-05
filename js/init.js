$(document).ready(function() {

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
	var elemEmoteList = $("#emoteData");
	var tablink;


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

	function bindEventListeners() {
		$('#emoteTable').on('click', 'tr', function(event) {
			var asciiSmiley = $(this).find("#asciiToCopy").text();
			copyAscii(asciiSmiley);
		});
	}

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

	/* COPY FUNCTIONS */

	function copyAscii(str) {
		var sandbox = $('#sandbox').val(str).select();
		document.execCommand('copy');
	}

	init();
});