// switch of class ==============================================
// (@append dynamicAdapt.js)

// burger =======================================================
$(document).ready(function () {
	$('.bottom-header__burger').click(function () {
		$('.bottom-header__burger, .bottom-header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});

// slader =======================================================
// $(function () {
// 	$('.slider').slick({
// 		arrows: false,
// 		dots: true,
// 		speed: 2000,
// 		infinite: true,
// 		autoplay: true,
// 		autoplaySpeed: 1500,
// 		pauseOnDotHover: true,
// 		pauseOnFocus: true,
// 		pauseOnHover: true
// 	});
// });