/*
	product hover overlay
*/

 jQuery(document).ready(function($){
	$('.product-wrap img').each(function(){ 
		var $this = $(this);
		$this.qtip(
				{
					content: {
						text: function(event, api) {
				                    $.ajax({
				                        url: api.elements.target.data('href')
				                    }).then(function(json_content) {				                       
				                        api.set('content.text', compileText(json_content));
				                    }, function(xhr, status, error) {				                        
				                        api.set('content.text', status + ': ' + error);
				                    });
				                    return 'Loading...'; 
				               }
				           },
				          show: {
						        effect: function(offset) {
						            $(this).fadeIn(500); // "this" refers to the tooltip
						        }
						    },
						  hide: {
				              	  fixed: true,
				                	delay: 300
				            },
				          position: {
                				  	my: 'left center',  // Position my top left...
        							at: 'right', // at the bottom right of...
            				},
            			  style: 'qtip-wiki'
				});
	});
 });




var compileText = function(content){
	var text = "<div class='title'>" + content.name + "</div>";
	text+="<div class='description'>" + content.description + "</div>";
	return text;
};
