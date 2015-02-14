/*
	AJAX PAGINATION
*/


jQuery(document).ready(function($){
	$('span.page a, span.first a, span.next a, span.last a').bind('click', function(event){
			event.preventDefault();
			var url = $(this).attr('href');
			$("#products-listing").addClass('overlay');
			$('.loader').show();
			$.get(url);

	});
});