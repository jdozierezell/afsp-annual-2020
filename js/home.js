$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};



$(window).on('resize scroll load', function() { 
	
if ($(window).scrollTop() <= 1) {
  $('#top_bar').removeClass('sticky');
}	
else {
  $('#top_bar').addClass('sticky');      
}



if ($('#holder1_animate1').isInViewport()) {
  $('#holder1_animate1 p').addClass('animated fadeIn');
}
if ($('#holder2_animate1').isInViewport()) {
  $('#holder2_animate1 p').addClass('animated fadeIn');
}
if ($('#holder3_animate1').isInViewport()) {
  $('#holder3_animate1 p').addClass('animated fadeIn');
}
if ($('#holder4_animate1').isInViewport()) {
  $('#holder4_animate1 p').addClass('animated fadeIn');
}
if ($('#holder5_animate1').isInViewport()) {
  $('#holder5_animate1 p').addClass('animated fadeIn');
}
if ($('#holder6_animate1').isInViewport()) {
  $('#holder6_animate1 p').addClass('animated fadeIn');
}

});


$('body').on('click', '#arrow', function() {
    $('html, body').animate({
        scrollTop: $("#section_holder2").offset().top
    }, 700);
}); 
