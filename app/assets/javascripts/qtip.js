jQuery(document).ready(function($){   
    callqTip();
 });




var compileText = function(content){
    var text = "<div class='title'>" + content.name + "</div>";
    text+="<div class='description'>" + content.description + "</div>";
    return text;
};

var callqTip = function(){
     $(document).on("mouseover", "img", function(){
         var $this = $(this);
             $this.qtip({
                    overwrite: false,
                    content:{
                        text: function(event, api){
                            $.get($this.data('href')).then(function(json_content){ 
                                 api.set('content.text', compileText(json_content));
                            }, function(xhr, status, error) {                                       
                                api.set('content.text', status + ': ' + error);
                            });
                            return 'Loading...'; 
                        }
                    },
                    show: {
                                effect: function(offset) {
                                    $(this).show() // "this" refers to the tooltip
                                 },
                                 event: event.type,
                                 ready: true
                            },
                    hide: {
                            fixed: true,
                            delay: 300
                          },
                    position: {
                                viewport: $(window),
                                effect: false,
                                my: 'center left',  // Position my top left...
                                at: 'right', // at the bottom right of...
                            },
                    style: 'qtip-wiki'
             });
         });
         
 }