$(document).ready(function () {

	//search input dropdown
	document.getElementById("searchInput").oninput = function () {
		$(this).next('.dropdown-menu').find('[data-toggle=dropdown]').dropdown('toggle');
		let output = '';
		$.ajax({
			type: 'GET',
			url: 'suggestions.json',
			dataType: 'json',
			success: function(data) {
				$.each(data, function(index, item){
					$.each(item, function(key, value){
						output += '<a class="dropdown-item" href="#">' + value.name + '</a>';
					});
				});
				document.getElementById('search-dropdown-menu').innerHTML = output;
			}
		});

	} // /search input dropdown

	//carousel indicators click 
	$("#first-indicator").click(function () {
		$(this).css("background-color", "#57c5a0");
		$('.first-text-indicator').css("color", "#fff");

		$("#second-indicator").css("background-color", "#000");
		$('#third-indicator').css("background-color", "#000");

		$('.second-text-indicator').css("color", "#979797");
		$('.third-text-indicator').css("color", "#979797");
	});

	$("#second-indicator").click(function () {
		$(this).css("background-color", "#57c5a0");
		$('.second-text-indicator').css("color", "#fff");

		$("#first-indicator").css("background-color", "#000");
		$('#third-indicator').css("background-color", "#000");

		$('.first-text-indicator').css("color", "#979797");
		$('.third-text-indicator').css("color", "#979797");
	});

	$("#third-indicator").click(function () {
		$(this).css("background-color", "#57c5a0");
		$('.third-text-indicator').css("color", "#fff");

		$('#second-indicator').css("background-color", "#000");
		$('#first-indicator').css("background-color", "#000");

		$('.first-text-indicator').css("color", "#979797");
		$('.second-text-indicator').css("color", "#979797");
	}); // /carousel indicators

	//products title hover
	$('.product-title-container')
		.on('mouseenter', function () {
			$(this).find('.product-title').hide();
			$(this).find('.product-icons').show();
		})
		.on('mouseleave', function () {
			$(this).find('.product-icons').hide();
			$(this).find('.product-title').show();
		})

	//popup for the flickr images
	$(function () {
		$('.pop').on('click', function (e) {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');
			//prevents the default behavior of jumping at the top of the page
			e.preventDefault();
		});
	}); // /flickr images

	//blog articles change every 5 seconds
	let articles_per_page = 2;
	let total_article_time = 5000;

	let articles_number = $('#blog-news .blog-titles').length;
	let total_news_pages = Math.ceil(articles_number / articles_per_page);
	let article_page = 0;
	let article_time_interval = 0;
	
	let displayNews = function() {
		let article_timer = setInterval(function() {
			article_page = (article_page >= total_news_pages) ? 1 : ++article_page;

			$el = $('#blog-news').children('.blog-titles.show');
			$el.removeClass('animate');

			setTimeout(function() {
				$el.removeClass('show');

				for (let i = 0; i < articles_per_page; i++) {
					let article_index = (article_page - 1) * articles_per_page + i;
					let $el = $('#blog-news').children('.blog-titles').eq(article_index);
		
					// messy attempt to make sure the animation takes effect after the class is appended.
					$el.addClass('show');
					setTimeout(function() {
						$el.addClass('animate');
					}, 10);
				}
			}, 1000);

			if (article_time_interval == 0) {
				article_time_interval = total_article_time;
				clearInterval(article_timer);
				displayNews();
			}
		}, article_time_interval);
	}
	displayNews(); // /blog articles

	//tweets appear every 10 seconds
	let tweets_per_page = 1;
	let total_tweet_time = 10000;

	let tweets_number = $('#tweets-container .tweet').length;
	let total_tweets_pages = Math.ceil(tweets_number / tweets_per_page);
	let tweet_page = 0;
	let tweet_time_interval = 0;
	
	let displayTweets = function() {
		let tweet_timer = setInterval(function() {
			tweet_page = (tweet_page >= total_tweets_pages) ? 1 : ++tweet_page;

			$tweet_el = $('#tweets-container').children('.tweet.show');
			$tweet_el.removeClass('animate');

			setTimeout(function() {
				$tweet_el.removeClass('show');

				for (let i = 0; i < tweets_per_page; i++) {
					let tweet_index = (tweet_page - 1) * tweets_per_page + i;
					let $tweet_el = $('#tweets-container').children('.tweet').eq(tweet_index);
		
					// messy attempt to make sure the animation takes effect after the class is appended.
					$tweet_el.addClass('show');
					setTimeout(function() {
						$tweet_el.addClass('animate');
					}, 10);
				}
			}, 1000);

			if (tweet_time_interval == 0) {
				tweet_time_interval = total_tweet_time;
				clearInterval(tweet_timer);
				displayTweets();
			}
		}, tweet_time_interval);
	}
	displayTweets();// /tweets

	//submit email
	$('#newsletter-form').submit(function(event) {
		let email_input = { 
			email: $('#email-input').val() 
		};

		//sending data to emails.php file
		$.post("emails.php", email_input).done(function(data) {
			//converts the json response into a js object
			var data = $.parseJSON(data);

			//if there are no errors show mail received
			if (data.success == true) {
				$('#email-input').val('Mail received!');
				$('#email-input').addClass('is-valid')
				setTimeout(function(){ 
					$('#email-input').val('');
					$('#email-input').removeClass('is-valid');  
			}, 2000);
			}else {
				$('#email-input').addClass('is-invalid');
				$('#email-input').val('Incorrect mail format. Try again');
				setTimeout(function(){ 
					$('#email-input').val(''); 
					$('#email-input').removeClass('is-invalid'); 
				}
				, 2000);
				
			}
		});

		//prevent the refresh page on submit
		event.preventDefault();
		return false;
	});

	
});

