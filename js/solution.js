$(document).ready(function() {
  //top button animation
  $('.top').click(function() {
    $('html, body').animate({scrollTop : 0}, 500);
    return false;
  });
  //.sub-gnb 고정
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.sub-gnb').addClass('scroll-ing');
      $('.sub-gnb-sub .gnb-sub-item:eq(0)').addClass('scroll');
    } 
    else {
      $('.sub-gnb').removeClass('scroll-ing');
      $('.sub-gnb-sub .gnb-sub-item:eq(0)').removeClass('scroll');
    }
  });
  
  //소개-빙산 스크롤
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if (scroll >= 1000) {
      $('.sub-gnb-sub .gnb-sub-item:eq(0)').removeClass('scroll');
      $('.solution-process .ice').addClass('show');
      $('.sub-gnb-sub .gnb-sub-item:eq(1)').addClass('scroll');
    } else {
      $('.solution-process .ice').removeClass('show');
      $('.sub-gnb-sub .gnb-sub-item:eq(1)').removeClass('scroll');
    }
  });
  
  //사례 스크롤
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if (scroll >= 3600) {
      $('.sub-gnb-sub .gnb-sub-item:eq(1)').removeClass('scroll');
      $('.sub-gnb-sub .gnb-sub-item:eq(2)').addClass('scroll');
    } else {
      $('.sub-gnb-sub .gnb-sub-item:eq(2)').removeClass('scroll');
    }
  });
  
  //효과 스크롤
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if (scroll >= 4600) {
      $('.sub-gnb-sub .gnb-sub-item:eq(2)').removeClass('scroll');
      $('.sub-gnb-sub .gnb-sub-item:eq(3)').addClass('scroll');
    } else {
      $('.sub-gnb-sub .gnb-sub-item:eq(3)').removeClass('scroll');
    }
  });
  
  //BillOneQ 솔루션사례(탭 메뉴)
  tabMenu('.case-tab-list .case-tab-item .case-tab-link');
  function tabMenu(selector) {
      $(selector).each(function(i) {
          $(selector).eq(i).on('click focusin', function() {
              $('.case-tab-list .case-tab-item .case-tab-link').removeClass('case-tab-active');
              $(this).addClass('case-tab-active');
              $('.case-figure img').attr({
                src: 'img/img_solution_billoneq_slide_' + (i + 1) + '.png',
              });
          });
      });
  }
});