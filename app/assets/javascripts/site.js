/*
	AJAX PAGINATION
*/


jQuery(document).ready(function($){
	$('.pagination li a').bind('click', function(event){
			event.preventDefault();
			var url = $(this).attr('href');
			$("#products-listing").addClass('overlay');
			$('.loader').show();
			$.get(url);

	});
});