/*
	AJAX PAGINATION
*/


jQuery(document).ready(function($){
	$(document).on('click', '.pagination li a', function(event){
			event.preventDefault();
			var url = $(this).attr('href');
			$("#products-listing").addClass('overlay');
			$('.loader').show();
			$.get(url);
	});
});