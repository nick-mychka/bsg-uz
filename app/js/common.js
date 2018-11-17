$(function() {

	// Custom JS

		/* ........... Prevent drag on the links and images ........... */

	$("img, a").on("dragstart", function(event) { 
		event.preventDefault(); 
	});

	$('.logo-carousel__container').flickity({
		prevNextButtons: false,
		pageDots: false,
		freeScroll: true,
		contain: true,
		wrapAround: true,
		groupCells: 1,
		selectedAttraction: 0.01,
		friction: 0.15,
		autoPlay: true
	});

	$('.meeting-carousel__container').flickity({
		freeScroll: true,
		contain: true,
		wrapAround: true
	})
	

	/* ........... Settings the open/close burger menu ........... */

	var hamburger = $(".hamburger"),
		burgerList = $(".burger-list"),
		closeOverlay = $(".close-overlay");


		// Menu will open

	$(".hamburger").on("click", function() {
		$(this).toggleClass("is-active");
		burgerList.toggleClass("menu-active");
		closeOverlay.toggleClass("menu-active");
	});


		// Menu will close

	$(".close-overlay, .burger-list ul li a").on("click", closeMenu);
	$(".burger-list ul li a").on("click", closeMenu);

	function closeMenu() {
		hamburger.removeClass("is-active");
		burgerList.removeClass("menu-active");
		closeOverlay.removeClass("menu-active");
	}


	/* ...........  Set up a Smooth scroll  ........... */

	var $root = $('html, body');
	$('.smooth-scroll-on-js a[href^="#"]').on('click', function(event) {
		$root.animate({
			scrollTop: $('[data-name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 20
		}, 700);
		return false;
	});

});
