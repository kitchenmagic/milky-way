// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

(function(jQuery){
    
    var viewport = {
        width : $(window).width(),
        height : $(window).height()
    };
    
    var breakpoint = {
    	small : 640,
    	medium : 798,
    	large : 1024,
    	xlarge : 1920
    }
    
    var el = document.createElement('div');
    $("<p>Text</p>").appendTo(".page");
    $('body > div > div').addClass("inner-wrap");
    //"<div class='off-canvas-wrap mamroud'>"
    console.log('Still Here');
    
    //if( viewport.width <= breakpoint.medium){
    //};
    
   

})();

$(document).foundation('off-canvas', 'reflow');





//var jQueryMobileJS = 'http://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js';
    //var jQueryMobileCSS = "http://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js";

/*
$.ajax({
async:false,
type:'GET',
url:source,
data:null,
success:console.log('true'),
dataType:'script',
error: function(xhr, textStatus, errorThrown) {
// Look at the `textStatus` and/or `errorThrown` properties.
}
});
*/
//$('body > div').attr( "data-role", "page");
//$('body > div > div').attr( "data-role", "content");
//$('body > div > div').attr( "data-enhance", "false");

//Load jQuery Mobile on mobile devices
//$.getScript( jQueryMobileJS, function(){ console.log("loaded jQuery Mobile"); });
/*
$(".km-toggle-menu").click(function(){
$( "#km-panel-left" ).panel( "open");
});

var panels = $('#km-panels');
console.log(panels);
$('body > div').append(panels);
console.log('Appended panels');
*/