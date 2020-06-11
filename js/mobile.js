$(document).ready(function() {
  $('.head-menu-btn').on('click', function() {
    $(this).addClass('on');
    if ($(this).is('on')) {
      $('.head-menu-cont').stop().animate({
        opacity: 1,
        height: '100%'
      });
    }
    else {
      $('.head-menu-cont').stop().animate({
        opacity: 0,
        height: 0
      });
    }
  });
});