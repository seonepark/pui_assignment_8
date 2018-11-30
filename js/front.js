$(document).ready(function(){
	$('.projects-carousel').owlCarousel({
		items:1,
		nav:true,
		loop:true,
		dots:true,
		navText:["<span><span><img src='images/nav-prev.png' alt='prev button' /></span></span>","<span><span><img src='images/nav-next.png' alt='next button' /></span></span>"]
	});

	$('.projects-carousel .owl-nav').removeClass('owl-nav');
	$('.projects-carousel .owl-prev').addClass('owl-btn');
	$('.projects-carousel .owl-next').addClass('owl-btn');

	$('.carnnect-outcome-carousel').owlCarousel({
		items:1,
		nav:true,
		loop:true,
		dots:true,
		dots:false,
		navText:["<span><span><img src='images/nav-prev.png' alt='prev button' /></span></span>","<span><span><img src='images/nav-next.png' alt='next button' /></span></span>"]
	});

	$('.carnnect-outcome-carousel .owl-nav').removeClass('owl-nav');
	$('.carnnect-outcome-carousel .owl-prev').addClass('owl-btn');
	$('.carnnect-outcome-carousel .owl-next').addClass('owl-btn');
	
	$('.implementation-plan-carousel').owlCarousel({
		items:1,
		nav:true,
		loop:true,
		dots:true,
		dots:false,
		navText:["<span><span><img src='images/nav-prev.png' alt='prev button' /></span></span>","<span><span><img src='images/nav-next.png' alt='next button' /></span></span>"]
	});

	$('.implementation-plan-carousel .owl-nav').removeClass('owl-nav');
	$('.implementation-plan-carousel .owl-prev').addClass('owl-btn');
	$('.implementation-plan-carousel .owl-next').addClass('owl-btn');

	$('.progress-item.active').removeClass('hidden-xs hidden-sm');
});