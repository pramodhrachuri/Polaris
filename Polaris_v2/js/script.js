$(document).ready(function() {

    var section = $('.section');
    var header = $('.header');

    section.on('scrollSpy:enter', function() {
		  $(this).addClass('section--show animated fadeInUp');
    });

    header.on('scrollSpy:enter', function(){
      $('.heading-primary').addClass('animated zoomIn');
      $('.heading-subtitle').addClass('animated zoomIn');
    });

    section.scrollSpy();
    header.scrollSpy();
    
});