
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//portfolio articals slide toggles
$(document).ready(function(){
function slide() {
   $(this).find(".articalDiscription").slideToggle("slow");

   return false;
}
$(".articalImage").hover(slide, slide);

});


//Slider in pop up
 $('.carousel').carousel();
    $('.carousel').on('slide.bs.carousel', function(e) {
        var from = $('#myCarousel .carousel-buttons .col-xs-3').index();
        var next = $(e.relatedTarget);
        var to =  next.index();

//      	$('#myCarousel .carousel-buttons .col-xs-3').removeClass('active').eq(to).addClass('active');
    });


//Brain animation
function animateit(){
  $('.brainColour').animate({'height' : '82px', 'botom' : '0px' }, 2000, function(){
  });
}
animateit();


//Header resize on scroll
//$(window).scroll(function() {
//
//    var scroll = $(window).scrollTop(),
//        header = $('#floatHeader')
//
//    if (scroll >= 50) {
//        header.addClass('smaller');
//    }else{
//        header.hasClass('smaller');
//        header.removeClass('smaller');
//    }
//});
