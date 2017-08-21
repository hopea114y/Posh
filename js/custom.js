$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
	loop: true,
	nav: false,
	items: 1,
	smartSpeed: 700,
})

$(function() {
	var link = $('.m-menu-link');
	var close = $('.close-menu');
	var menu = $('.m-menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	})
	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	})
})