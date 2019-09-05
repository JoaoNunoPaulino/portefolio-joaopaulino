

function menu() {
	document.getElementById("side_bar_open").style.visibility = "visible";
	document.getElementById("side_bar_open").style.display = "block";
	document.getElementById("side_bar_open").style.width = "100%";
}

function closeMenu() {
	document.getElementById("side_bar_open").style.visibility = "hidden";
	document.getElementById("side_bar_open").style.display = "none";
	document.getElementById("side_bar_open").style.width = "0";
	// document.getElementById("side_bar_open_logo").style.visibility = "hidden";
}





(function($) {

	"use strict";
	
	var cfg = {		
		defAnimation   : "fadeInUp",    // default css animation		
		scrollDuration : 800,           // smoothscroll duration
		statsDuration  : 4000           // stats animation duration
	},	
	$WIN = $(window);
	
	
	/* Menu on Scrolldown
	* ------------------------------------------------------ */
	var ssMenuOnScrolldown = function() {
	
	  var menuTrigger = $('#header-menu-trigger');
	
	  $WIN.on('scroll', function() {
	
		  if ($WIN.scrollTop() > 150) {				
			  menuTrigger.addClass('opaque');
		  }
		  else {				
			  menuTrigger.removeClass('opaque');
		  }
	
	  });
	   
	};

	 /* Smooth Scrolling
	* ------------------------------------------------------ */
	var ssSmoothScroll = function() {

		$('.smoothscroll').on('click', function (e) {
			var target = this.hash,
			$target    = $(target);
	 	
		 	e.preventDefault();
		 	e.stopPropagation();	   	

	    	$('html, body').stop().animate({
	       	'scrollTop': $target.offset().top
	      }, cfg.scrollDuration, 'swing').promise().done(function () {

	      	// check if menu is open
	      	if ($('body').hasClass('menu-is-open')) {
					$('#header-menu-trigger').trigger('click');
				}

	      	window.location.hash = target;
	      });
	  	});

	};

	/* Back to Top
	* ------------------------------------------------------ */
	var ssBackToTop = function() {

		var pxShow  = 500,         // height on which the button will show
		fadeInTime  = 400,         // how slow/fast you want the button to show
		fadeOutTime = 400,         // how slow/fast you want the button to hide
		scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
		goTopButton = $("#go-top")

		// Show or hide the sticky footer button
		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= pxShow) {
				goTopButton.fadeIn(fadeInTime);
			} else {
				goTopButton.fadeOut(fadeOutTime);
			}
		});
	};
	
	 /* Stat Counter
  	*------------------------------------------------------- */
  	// var ssStatCounter = function() {

	// 	var statSection = $("#Status"),
	// 	stats           = $(".counter_item_counter");
 
	// 	statSection.waypoint({
	// 		handler: function(direction) {
 
	// 		   if (direction === "down") { 
	// 				stats.each(function () {
	// 					var $this = $(this);
 
	// 					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
	// 						duration: cfg.statsDuration,
	// 						easing: 'swing',
	// 						step: function (curValue) {
	// 						   $this.text(Math.ceil(curValue));
	// 						 }
	// 					   });
	// 				 });
	// 			} 
 
	// 			// trigger once only
	// 			this.destroy(); 
	// 		 },	
	// 		 offset: "90%"	
	// 	 });
 
	//    };


		


  /* Initialize
	* ------------------------------------------------------ */
	(function ssInit() {

		// ssPreloader();
		// ssFitVids();
		// ssMasonryFolio();
		// ssLightGallery();
		ssMenuOnScrolldown();
		// ssOffCanvas();
		ssSmoothScroll();
		// ssPlaceholder();
		//ssStatCounter();
		// ssAlertBoxes();
		// ssAnimations();
		// ssIntroAnimation();		
		// ssContactForm();
		ssBackToTop();

	})();
 

})(jQuery);