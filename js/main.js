// Place any jQuery/helper plugins in here.

//Author URL: http://www.ianlunn.co.uk/
//License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

//Dual licensed under the MIT and GPL licenses:
//http://www.opensource.org/licenses/mit-license.php
//http://www.gnu.org/licenses/gpl.html
// vertical Scrolling modified by globeFreak www.cwclan.de

$(document).ready(function() {//when the document is ready

	if (!$.cookie("CW_MoveBackground")) {
		$.cookie("CW_MoveBackground", 1, {
			expires : 50
		});
	};

	var move = $(".moveBGR"), state = $.cookie("CW_MoveBackground");

	move.click(function() {
		$.cookie("CW_MoveBackground", (state == 1 ? "0" : "1"), {
			expires : 50
		});
		window.location.reload();
	});

	windowHeight = $(window).height();
	//scrollHeight = $(window).scrollHeight;
	//get the height of the window
	cityW = windowHeight * 0.675;
	//create a variable that contains the starting position for bg-city.png
	hillsW = windowHeight * 0.010;
	//do the same for bg-hills.png
	hillsH = windowHeight * 0.250;
	//do the same for bg-hills.png
	cloudsW = windowHeight * 0.350;
	//do the same for bg-clouds.png
	cloudsH = windowHeight * 0.010;
	sky = 0;
	//sky starts at the top (0px)
	//change the css of the <html> element to give it multiple backgrounds using CSS3. This contains the variables we just worked out for each individual background
	$('html').css({
		"background" : "url(img/bg-city.png) " + cityW + "px bottom repeat-x fixed, url(img/bg-hills.png) " + hillsW + "px " + hillsH + "px repeat-x fixed, url(img/bg-clouds.png) " + cloudsW + "px " + cloudsH + "px repeat-x fixed, url(img/bg-sky.jpg) " + sky + "px " + sky + "px repeat-x #747a94 fixed"
	});

	function Move() {//set up a function to be called whenever the window is scrolled or resized
		windowHeight = $(window).height();
		//scrollHeight = $(window).scrollHeight;
		//get the height of the window
		pos = $(window).scrollTop();				
		//get the position of the scrollbar
		cityW = windowHeight * 0.675 + pos * 0.05;
		//create a variable that contains the starting position for bg-city.png
		//cityH = windowHeight - 414) - pos * 0.2;
		hillsW = windowHeight * 0.010 + pos * 0.04;
		//do the same for bg-hills.png
		hillsH = windowHeight * 0.250;
		cloudsW = windowHeight * 0.350 + pos * 0.03;
		//do the same for bg-clouds.png
		cloudsH = windowHeight * 0.010;
		skyW = 0 + pos * 0.02;
		//do the same for bg-sky.png
		sky = 0;
		//keep the sky at the top (0px), it moves naturally with the scroll anyway
		//change the css of the <html> element to give it multiple backgrounds using CSS3. The variables contained will change for every pixel the window is resized or scrolled
		$('html').css({
			"background" : "url(img/bg-city.png) " + cityW + "px bottom repeat-x fixed, url(img/bg-hills.png) " + hillsW + "px " + hillsH + "px repeat-x fixed, url(img/bg-clouds.png) " + cloudsW + "px " + cloudsH + "px repeat-x fixed, url(img/bg-sky.jpg) " + skyW + "px " + sky + "px repeat-x #747a94 fixed"
		});
	}


	$(window).resize(function() {//when the window is resized...
		Move();
		//call the Move() function
	});

	$(window).bind('scroll', function() {//when the user is scrolling...
		if ($.cookie("CW_MoveBackground") == 1) {
			Move();
		};
		//call the Move() function
	});

});

// jQuery div toggle
(function($) {
	$.fn.showHide = function(options) {

		//default vars for the plugin
		var defaults = {
			speed : 800,
			easing : '',
			changeText : 0,
			showText : 'Show',
			hideText : 'Hide'

		};
		var options = $.extend(defaults, options);

		$(this).click(function() {
			// optionally add the class .toggleDiv to each div you want to automatically close
			//$('.toggleDiv').fadeOut(options.speed, options.easing);
			$('.toggleDiv').animate({
				width : '10',
				opacity : .5
			}, 'slow');
			// this var stores which button you've clicked
			var toggleClick = $(this);
			// this reads the rel attribute of the button to determine which div id to toggle
			var toggleDiv = $(this).attr('title');
			// here we toggle show/hide the correct div at the right speed and using which easing effect
			//$(toggleDiv).fadeToggle(options.speed, options.easing, function() {
			$(toggleDiv).animate({
				height : 'toggle',
				opacity : 'toggle'
			}, 'slow', function() {
				// this only fires once the animation is completed
				if (options.changeText == 1) {
					$(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
				}
			});

			return false;

		});

	};
})(jQuery);

$(document).ready(function() {

	if (!$.cookie("CW_LeftToggleStatus")) {
		$.cookie("CW_LeftToggleStatus", 1, {
			expires : 14
		});
	};

	var panel = $("#side_left"), flip = $(".flip_left"), state = $.cookie("CW_LeftToggleStatus");

	flip.click(function() {
		panel.slideToggle("slow", function() {
			$.cookie("CW_LeftToggleStatus", (state == 1 ? "0" : "1"), {
				expires : 14
			});
		});
	});

	if ((state == 0 && panel.is(':visible'))) {
		panel.hide();
	}

	// Rechtes Panel
	if (!$.cookie("CW_RightToggleStatus")) {
		$.cookie("CW_RightToggleStatus", 1, {
			expires : 14
		});
	};
	var panelr = $("#side_right"), flipr = $(".flip_right"), stater = $.cookie("CW_RightToggleStatus");

	flipr.click(function() {
		panelr.slideToggle("slow", function() {
			$.cookie("CW_RightToggleStatus", (stater == 1 ? "0" : "1"), {
				expires : 14
			});
		});
	});

	if ((stater == 0 && panelr.is(':visible'))) {
		panelr.hide();
	}

});

// jQuery div toggle ---END---