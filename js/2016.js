(function() {
	function byId(id) {
		return document.getElementById(id);
	}

	function formatTens(n) {
		// format integers to have at least two digits
		return (n < 10) ? '0'+n : ''+n;
	}


	// Mayan Calendar: 1356088271111

	set_tweet_dude = false;

	function update() {
		var units =countdown.YEARS |
    countdown.DAYS |
    countdown.HOURS |
    countdown.MINUTES |
    countdown.SECONDS,
			empty = "GO VOTE!" || null,
			max = +(11),
			digits = +(0);


		var yyyy = +(2016),
			MM = +(11)-1,
			dd = +(8),
			HH = +(9),
			mm = +(00),
			ss = +(00),
			fff = +(00);

		var start = new Date(yyyy, MM, dd, HH, mm, ss, fff),
			ts = countdown(start, null, units, max, digits);
			days_left = ts.days;






		var counter = byId('counter'),
			msg = ts.toHTML('strong', empty);
			var msgNew = '';
					$(msg).filter('strong').each(function(){
					var a = $(this).html().split(' ');
					msgNew += "<div><strong>"+a[0]+"</strong> ";
					msgNew += "<em>"+a[1]+"</em></div> ";
					});
					msg = msgNew;


		counter.innerHTML = msg;

		// update timezone label
		var tz = start.getTimezoneOffset();
		if (tz) {
			var tzh = Math.floor(Math.abs(tz) / 60),
				tzm = (Math.abs(tz) % 60);

		} else {
		}

		requestAnimationFrame(update);
	}
	update();

function update2() {
	if (!set_tweet_dude){

		console.log(days_left);
		set_tweet_dude = true;
		tweet_text = 'The election is coming: ' + days_left + ' days left - Get involved now!';

		// Remove existing iframe
		$('#tweetBtn iframe').remove();
		// Generate new markup
		var tweetBtn = $('<a></a>')
			.addClass('twitter-share-button')
			.attr('href', 'http://twitter.com/share')
			.attr('data-url', 'http://test.com')
			.attr('data-size', 'large"')
			.attr('data-url', 'http://2016.ninja')
			.attr('data-related', 'HillaryClinton,harper')
			.attr('data-hashtags', 'ImWithHer,Vote')
			.attr('data-text', tweet_text);
		$('#tweetBtn').append(tweetBtn);

		window.twttr.widgets.load()
		//console.log(window.twttr);
	}

	}
	update2();
})();
