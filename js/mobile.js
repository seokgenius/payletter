$(document).ready(function() {
  //header menu
  $('.head-menu-btn').on('click', function() {
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
      $('.head-menu-cont').stop().animate({
        opacity: 1,
        height: '100%'
      });
      $('header .head-menu .head-menu-btn span').css('display','none');
      $(this).addClass('head-close-btn');
    }
    else {
      $('.head-menu-cont').stop().animate({
        opacity: 0,
        height: 0
      });
      $(this).removeClass('head-close-btn');
      $('header .head-menu .head-menu-btn span').css('display','block');
    }
  });
});