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

		// check for twitch domain
		chrome.tabs.getSelected(null, function(tab) {
			tablink = tab.url;
		});
	}

	function bindEventListeners() {
		$('#emoteTable').on('click', 'tr', function(event) {
			var asciiSmiley = $(this).find("#asciiToCopy").text();
			copyAscii(asciiSmiley);
			
			if ($('#chat_text_input')) {
				$('#chat_text_input').val(asciiSmiley);
			}
		});
		/*$('#copy-ascii').click(function() {
			console.log($(this).find('#asciiToCopy').text());
		});*/
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