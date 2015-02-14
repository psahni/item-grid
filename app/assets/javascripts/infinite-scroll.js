var current_page = 0;
$(window).scroll(function(){
	console.log(endOfPage());
    if(endOfPage()){
          //alert("This is end of the document");       
          current_page = current_page + 1;
         loadContent(current_page);
    }
}); 


var loadContent = function(current_page){
	var offset = current_page*PER_PAGE;
	$("#page-scroll-loader").show();
	$.get('/products/scroll?offset=' + String(offset)).then(function(response){
		$("#products-listing").append(response);
		$("#page-scroll-loader").hide();
		var current_position = $(window).scrollTop();
		 $(window).scrollTop(current_position+75);
	});
}

var endOfPage = function(){
	return ($(window).scrollTop() == $(document).height() - $(window).height());
}