$(document).ready(function () {

	//search input dropdown

	//login popup

	//carousel indicators click 
	$("#first-indicator").click(function(){
		$(this).css("background-color", "#57c5a0");
		$('.first-text-indicator').css("color", "#fff");

		$("#second-indicator").css("background-color", "#000");
		$('#third-indicator').css("background-color", "#000");

		$('.second-text-indicator').css("color", "#979797");
		$('.third-text-indicator').css("color", "#979797");
	});

	$("#second-indicator").click(function(){
		$(this).css("background-color", "#57c5a0");
		$('.second-text-indicator').css("color", "#fff");

		$("#first-indicator").css("background-color", "#000");
		$('#third-indicator').css("background-color", "#000");

		$('.first-text-indicator').css("color", "#979797");
		$('.third-text-indicator').css("color", "#979797");
	});

	$("#third-indicator").click(function(){
		$(this).css("background-color", "#57c5a0");
		$('.third-text-indicator').css("color", "#fff");

		$('#second-indicator').css("background-color", "#000");
		$('#first-indicator').css("background-color", "#000");

		$('.first-text-indicator').css("color", "#979797");
		$('.second-text-indicator').css("color", "#979797");
	});

	//products title hover
	$('.product-title-container')
	.on('mouseenter', function() {
		$(this).find('.product-title').hide();
		$(this).find('.product-icons').show();
	})
	.on('mouseleave', function() {
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














});

