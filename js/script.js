$(function() {
		$('.pop').on('click', function(e) {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');   
            e.preventDefault();
		});		
});