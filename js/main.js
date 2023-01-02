(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-area").removeClass("sticky");
	} else {
		$(".header-area").addClass("sticky");
	}
});




$('.search-icon').on('click', function(){
	$('.popup-search-box').addClass('active')
})

$('.searchClose').on('click', function(){
	$('.popup-search-box').removeClass('active')
})

// nice-select
$('select').niceSelect();




//splide-slider 
var splide = new Splide( '.splide', {
	arrows:false,
	pagination:true,
	drag:true,
});
splide.mount();



//splide

//first-slider first
new Splide("#first-slider", {
	perPage: 4,
	perMove: 1,
	arrows:true,
	pagination:false,
	type: 'loop',
	gap: '8px', 
	padding: 0,
	breakpoints: {
		  1200: { perPage: 4 },
		  960: { perPage: 3 },
		  768: { perPage: 2 },
		  400: { perPage: 1, //padding: '20%' 
		},
	}
}).mount();

//second-slider second
new Splide("#second-slider", {
	perPage:4,
	perMove: 1,
	arrows:true,
	arrowPath: 'beak',
	pagination:false, 
	type: 'loop',
	gap: '8px', 
	padding: 0,
	breakpoints: {
		  1200: { perPage: 4 },
		  960: { perPage: 3 },
		  768: { perPage: 2 },
		  400: { perPage: 1, //padding: '20%' 
		},
	}
}).mount();


//second-slider three
new Splide("#three-slider", {
	perPage:4,
	perMove: 1,
	arrows:true,
	arrowPath: 'beak',
	pagination:false, 
	type: 'loop',
	gap: '8px', 
	padding: 0,
	breakpoints: {
		  1200: { perPage: 4 },
		  960: { perPage: 3 },
		  768: { perPage: 2 },
		  400: { perPage: 1, //padding: '20%' 
		},
	}
}).mount();









// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel product-active
$('.product-active').owlCarousel({
    loop:true,
    margin:30,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:3
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa-solid fa-upload"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);