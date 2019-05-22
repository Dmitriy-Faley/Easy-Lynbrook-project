jQuery(function($) {

	$('.homepage_slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  centerMode: true,
	  centerPadding: '0px',
	  draggable: true
});

	$('.insta_feed').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  arrows: false,
	  variableWidth: true, //установить собственную ширину 
	  //centerMode: true,
	  //centerPadding: 'px',
	  draggable: true
});
	
	var $carousel = $('.homepage_slider');
$(document).on('keydown', function(e) {
                if(e.keyCode == 37) { //37 код кнопки
                    $carousel.slick('slickPrev');
                }
                if(e.keyCode == 39) { // 39 код кнопки
                    $carousel.slick('slickNext');
                }
            });

var $carousel = $('.insta_feed');
$(document).on('keydown', function(e) {
                if(e.keyCode == 37) { //37 код кнопки
                    $carousel.slick('slickPrev');
                }
                if(e.keyCode == 39) { // 39 код кнопки
                    $carousel.slick('slickNext');
                }
            });

});
