// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

	var slid = jQuery('#slider-baner');
		
	slid.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				mouseDrag: true
			},
			767:{
				items: 1,
				mouseDrag: true
			},
			991:{
				items: 1,
				mouseDrag: true
			},
			1099:{
				items: 1,
				mouseDrag: true
			}
		}
	});
	
	var slid = jQuery('#slider-baner6');
		
	slid.owlCarousel({
		items: 4,
    margin: 10,
    loop: true,
    nav: true
	})

	/*ДЛЯ ПРОЕКТА С ЭЛЬЗОЙ*/
	var slid1 = jQuery('#slider-baner3');
		
	slid1.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		mouseDrag: true,
		margin: 5,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 2,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 2,
				mouseDrag: true
			},
			629:{
				items: 3,
				mouseDrag: true
			},
			767:{
				items: 3,
				mouseDrag: true
			},
			991:{
				items: 4,
				mouseDrag: true
			},
			1099:{
				items: 6,
				mouseDrag: true
			}
		}
	});
	});
	