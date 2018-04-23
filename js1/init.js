(function($){
  $(function(){

    $('.button-collapse').sideNav({
        menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });

    $('.parallax').parallax();

    $('.dropdown-button').dropdown();


      $(window).scroll(function() {
    $(".slideanim_up").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide_up");
        }
    });
  });


    $(window).scroll(function() {
    $(".slideanim_down").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide_down");
        }
    });
  });



      $(window).scroll(function() {
    $(".slideanim_left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide_left");
        }
    });
  });


    $(window).scroll(function() {
    $(".slideanim_right").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide_right");
        }
    });
  });


$('.collapsible').collapsible().accordion();


  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function(){
  $('ul.tabs').tabs();
 });


loadImages(0);