// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }}
}());

// Place any jQuery/helper plugins in here.

//Author URL: http://www.ianlunn.co.uk/
//License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

//Dual licensed under the MIT and GPL licenses:
//http://www.opensource.org/licenses/mit-license.php
//http://www.gnu.org/licenses/gpl.html
// vertical Scrolling modified by globeFreak www.cwclan.de

$(document).ready(function() { //when the document is ready
				
		windowHeight = $(window).height(); //get the height of the window
		city = windowHeight * 0.675; //create a variable that contains the starting position for bg-city.png
		hillsW = windowHeight * 0.010; //do the same for bg-hills.png
		hillsH = windowHeight * 0.350; //do the same for bg-hills.png
		cloudsW = windowHeight * 0.350; //do the same for bg-mountains.png
		cloudsH = windowHeight * 0.010;		
		sky = 0; //sky starts at the top (0px)
		
		//change the css of the <html> element to give it multiple backgrounds using CSS3. This contains the variables we just worked out for each individual background
		$('html').css({"background" : "url(img/bg-city.png) " + city + "px bottom repeat-x fixed, url(img/bg-hills.png) " + hillsW + "px " + hillsH + "px repeat-x fixed, url(img/bg-clouds.png) " + cloudsW + "px " + cloudsH + "px repeat-x fixed, url(img/bg-sky.jpg) " + sky + "px " + sky + "px repeat-x #747a94 fixed"});
		
		
		function Move(){ //set up a function to be called whenever the window is scrolled or resized
			windowHeight = $(window).height(); //get the height of the window
			pos = $(window).scrollTop(); //get the position of the scrollbar
			city = windowHeight * 0.675 + pos * 1.1; //create a variable that contains the starting position for bg-city.png
			cityfix = windowHeight * 0.675; 
			hillsW = windowHeight * 0.010 + pos * 0.7; //do the same for bg-hills.png
			hillsH = windowHeight * 0.350; 
			cloudsW = windowHeight * 0.350 + pos * 0.51; //do the same for bg-mountains.png
			cloudsH = windowHeight * 0.010; 
			skyW = 0 + pos * 0.35; //do the same for bg-mountains.png
			sky = 0; //keep the sky at the top (0px), it moves naturally with the scroll anyway
				
			//change the css of the <html> element to give it multiple backgrounds using CSS3. The variables contained will change for every pixel the window is resized or scrolled
			$('html').css({"background" : "url(img/bg-city.png) " + city + "px bottom repeat-x fixed, url(img/bg-hills.png) " + hillsW + "px " + hillsH + "px repeat-x fixed, url(img/bg-clouds.png) " + cloudsW + "px " + cloudsH + "px repeat-x fixed, url(img/bg-sky.jpg) " + skyW + "px " + sky + "px repeat-x #747a94 fixed"});
		}
		
	$(window).resize(function(){ //when the window is resized...
		Move(); //call the Move() function
	});		
	
	$(window).bind('scroll', function(){ //when the user is scrolling...
		Move(); //call the Move() function
	});
	
});

// jQuery div toggle
(function ($) {
    $.fn.showHide = function (options) {

	//default vars for the plugin
        var defaults = {
            speed: 800,
			easing: '',
			changeText: 0,
			showText: 'Show',
			hideText: 'Hide'

        };
        var options = $.extend(defaults, options);

        $(this).click(function () {
			 // optionally add the class .toggleDiv to each div you want to automatically close
             	//$('.toggleDiv').fadeOut(options.speed, options.easing);
             $('.toggleDiv').animate({ width: '10', opacity: .5 }, 'slow');             
			 // this var stores which button you've clicked
             var toggleClick = $(this);
		     // this reads the rel attribute of the button to determine which div id to toggle
		     var toggleDiv = $(this).attr('title');
		     // here we toggle show/hide the correct div at the right speed and using which easing effect
		   		//$(toggleDiv).fadeToggle(options.speed, options.easing, function() {
		     $(toggleDiv).animate({ height: 'toggle', opacity: 'toggle' }, 'slow', function() {
		     // this only fires once the animation is completed
			 if(options.changeText==1){
		     $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
			 }
              });

		  return false;

        });

    };
})(jQuery);

$(document).ready(function(){

   $('.show_hide').showHide({
		speed: 800,  // speed you want the toggle to happen
		easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
		changeText: 1, // if you dont want the button text to change, set this to 0
		showText: 'View',// the button text to show when a div is closed
		hideText: 'Close' // the button text to show when a div is open

	});

});
// jQuery div toggle ---END---