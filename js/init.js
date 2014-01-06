$(document).ready(function() {

	// List of emotes we should be able to load this externally from dropbox for instance
	var emotes = [
		{
			ascii: '(●´∀｀●)',
			regex: 'Happy',
			categorie: 'Faces'
		},
		{
			ascii: '(ノಠ益ಠ)ノ',
			regex: 'Angry',
			categorie: 'Faces'
		},
		{
			ascii: '(✿ ♥‿♥)',
			regex: 'Love',
			categorie: 'Faces'
		},
		{
			ascii: '「(°ヘ°)',
			regex: 'Confused',
			categorie: 'Faces'
		},
		{
			ascii: '¯\_(ツ)_/¯',
			regex: 'Whatever',
			categorie: 'Faces'
		},
		{
			ascii: '(ﾉﾟ0ﾟ)ﾉ~',
			regex: 'Surprised',
			categorie: 'Faces'
		},
		{
			ascii: '（￣へ￣）',
			regex: 'Smug',
			categorie: 'Faces'
		},
		{
			ascii: '((*゜Д゜)ゞ”',
			regex: 'Worried',
			categorie: 'Faces'
		},
		{
			ascii: 'ψ(*｀ー´)ψ',
			regex: 'Evil',
			categorie: 'Faces'
		},
		{
			ascii: '(´＿｀。)',
			regex: 'Sad',
			categorie: 'Faces'
		},
		{
			ascii: 'ヽ(ﾟДﾟ)ﾉ',
			regex: 'Scarred',
			categorie: 'Faces'
		},
		{
			ascii: '(*￣(ｴ)￣*)',
			regex: 'Bear',
			categorie: 'Animals'
		},
		{
			ascii: '(^・ω・^ )',
			regex: 'Cat',
			categorie: 'Animals'
		},
		{
			ascii: '@(*^ｪ^)@',
			regex: 'Monkey',
			categorie: 'Animals'
		},
		{
			ascii: 'ლ(́◉◞౪◟◉‵ლ)',
			regex: 'SuperHappy',
			categorie: 'Faces'
		},
		{
			ascii: 'ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ',
			regex: 'RaiseDongers',
			categorie: 'memes'
		}
	]

	// Plugin wide variables
	var elemEmoteList = $("#emoteData");
	var tablink;


	// Init function this will run first here we can make sure we have the correct variables to start
	function init() {

		addAsciiEmotes();
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
       		var index = parseInt(i)+1;
        	container.append('<tr id="copy-ascii"><td>'+index+'</td><td>'+elemAscii.categorie+'</td><td>'+elemAscii.regex+'</td><td id="asciiToCopy">'+elemAscii.ascii+'</td></tr>');
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