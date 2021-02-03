$('body').on('click', '#nav_toggle', function() {

if($('#site_nav').is(':visible')) {

  $('#nav_toggle').removeClass('nav_toggle-close');			
  $('#site_nav').removeClass('nav_show');
  $('body').removeClass('menu_open');

}

else {

  $('#nav_toggle').addClass('nav_toggle-close');
  $('#site_nav').addClass('nav_show');
  $('body').addClass('menu_open');
  
}

});


$('.desktop_nav-cell').on("mouseenter", function() {
  $('.desktop_nav-cell').css('opacity', '0.6');
  
if ($(this).hasClass("desktop_nav-col1")) {
   $('.desktop_nav-col1').css('opacity', '1');
}
else if ($(this).hasClass("desktop_nav-col2")) {
   $('.desktop_nav-col2').css('opacity', '1');
} 
else if ($(this).hasClass("desktop_nav-col3")) {
   $('.desktop_nav-col3').css('opacity', '1');
} 
else {
   $('.desktop_nav-col4').css('opacity', '1');
} 
  
}).on("mouseleave", function() {
  $('.desktop_nav-cell').css('opacity', '1');
});

//


$('.desktop_nav-blurbtrigger').on("mouseenter", function() {
  $('#desktop_nav-default').css('opacity', '0');
  var target = $(this).attr('rel');
  $('#'+target).show();
 
  
}).on("mouseleave", function() {
  $('#desktop_nav-default').css('opacity', '1');
  $('.nav_blurb').hide();
  
});



