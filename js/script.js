$(document).ready(function () {

	//search input dropdown
	document.getElementById("searchInput").oninput = function () {
		$(this).next('.dropdown-menu').find('[data-toggle=dropdown]').dropdown('toggle');
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				// Typical action to be performed when the document is ready:
				var response = JSON.parse(xhttp.responseText);
				var suggestions = response.products;

				var output = '';
				for (var i = 0; i < suggestions.length; i++) {
					output += '<a class="dropdown-item" href="#">' + suggestions[i].name + '</a>'
				}
				document.getElementById('search-dropdown-menu').innerHTML = output;
			}
		};
		xhttp.open("GET", "../suggestions.json", true);
		xhttp.send();

	}

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
	});

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
	});

	let articles_per_page = 2;
	let total_time = 5000;

	let articles_number = $('#blog-news .blog-titles').length;
	let total_news_pages = Math.ceil(articles_number / articles_per_page);
	let page = 0;
	let time_interval = 0;
	
	let displayNews = function() {
		let timer = setInterval(function() {
			page = (page >= total_news_pages) ? 1 : ++page;

			$el = $('#blog-news').children('.blog-titles.show');
			$el.removeClass('animate');

			setTimeout(function() {
				$el.removeClass('show');

				for (let i = 0; i < articles_per_page; i++) {
					let index = (page - 1) * articles_per_page + i;
					let $el = $('#blog-news').children('.blog-titles').eq(index);
		
					// bad attempt to make sure the animation takes effect after the class is appended.
					$el.addClass('show');
					setTimeout(function() {
						$el.addClass('animate');
					}, 10);
				}
			}, 1000);

			if (time_interval == 0) {
				time_interval = total_time;
				clearInterval(timer);
				displayNews();
			}
		}, time_interval);
	}
	displayNews();

	// mail validation/save
	











});

