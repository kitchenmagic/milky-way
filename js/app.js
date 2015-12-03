// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();

(function(jQuery){
    console.log("File Loaded");
    
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

    var jQueryMobileJS = 'http://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js';
    var jQueryMobileCSS = "http://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js";

    console.log("Wdith: " + viewport.width + " Height: " + viewport.height);

    if( viewport.width <= breakpoint.medium){

    	/*
    	$('body > div').attr( "data-role", "page");
    	$('body > div > div').attr( "data-role", "content");

		$.getScript(jQueryMobileJS, function(){
    		console.log("loaded jQuery Mobile");
    	});

    	$(".km-toggle-menu").click(function(){
    		$( "#km-panel-left" ).panel( "open");
    	});
		*/
    }
    
    
})()