$(document).ready(function() {
  //.sub-gnb 고정
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.sub-gnb').addClass('scroll-ing');
    } else {
      $('.sub-gnb').removeClass('scroll-ing');
    }
  });
  
  //소개-빙산 스크롤
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if (scroll >= 1000) {
      $('.solution-process .ice').addClass('show');
    } else {
      $('.solution-process .ice').removeClass('show');
    }
  });
  
  //BillOneQ 솔루션사례
  $('.case-tab-list .case-tab-item .case-tab-link:eq(0)').on('click', function() {
    $('.case-tab-list .case-tab-item .case-tab-link').removeClass('case-tab-active');
    $(this).addClass('case-tab-active');
    $('.case-figure img').attr({
      src: 'img/img_solution_billoneq_slide_1.png',
    });
    /*$('.solution-case-item').css({
      backgroundImage: 'url(../img/bg_solution_billoneq_slide1.jpg)'
    });*/
  });
  
  $('.case-tab-list .case-tab-item .case-tab-link:eq(1)').on('click', function() {
    $('.case-tab-list .case-tab-item .case-tab-link').removeClass('case-tab-active');
    $(this).addClass('case-tab-active');
    $('.case-figure img').attr({
      src: 'img/img_solution_billoneq_slide_2.png',
    });
    /*$('.solution-case-item').css({
      backgroundImage: 'url(../img/bg_solution_billoneq_slide2.jpg)'
    });*/
  });
  
  $('.case-tab-list .case-tab-item .case-tab-link:eq(2)').on('click', function() {
    $('.case-tab-list .case-tab-item .case-tab-link').removeClass('case-tab-active');
    $(this).addClass('case-tab-active');
    $('.case-figure img').attr({
      src: 'img/img_solution_billoneq_slide_3.png',
    });
    /*$('.solution-case-item').css({
      backgroundImage: 'url(../img/bg_solution_billoneq_slide2.jpg)'
    });*/
  });
  
  $('.case-tab-list .case-tab-item .case-tab-link:eq(3)').on('click', function() {
    $('.case-tab-list .case-tab-item .case-tab-link').removeClass('case-tab-active');
    $(this).addClass('case-tab-active');
    $('.case-figure img').attr({
      src: 'img/img_solution_billoneq_slide_4.png',
    });
    /*$('.solution-case-item').css({
      backgroundImage: 'url(../img/bg_solution_billoneq_slide2.jpg)'
    });*/
  });
  
  $('.case-tab-list .case-tab-item .case-tab-link:eq(4)').on('click', function() {
    $('.case-tab-list .case-tab-item .case-tab-link').removeClass('case-tab-active');
    $(this).addClass('case-tab-active');
    $('.case-figure img').attr({
      src: 'img/img_solution_billoneq_slide_5.png',
    });
    /*$('.solution-case-item').css({
      backgroundImage: 'url(../img/bg_solution_billoneq_slide2.jpg)'
    });*/
  });
  
  $('.case-tab-list .case-tab-item .case-tab-link:eq(5)').on('click', function() {
    $('.case-tab-list .case-tab-item .case-tab-link').removeClass('case-tab-active');
    $(this).addClass('case-tab-active');
    $('.case-figure img').attr({
      src: 'img/img_solution_billoneq_slide_6.png',
    });
    /*$('.solution-case-item').css({
      backgroundImage: 'url(../img/bg_solution_billoneq_slide2.jpg)'
    });*/
  });
  
  $('.case-tab-list .case-tab-item .case-tab-link:eq(6)').on('click', function() {
    $('.case-tab-list .case-tab-item .case-tab-link').removeClass('case-tab-active');
    $(this).addClass('case-tab-active');
    $('.case-figure img').attr({
      src: 'img/img_solution_billoneq_slide_7.png',
    });
    /*$('.solution-case-item').css({
      backgroundImage: 'url(../img/bg_solution_billoneq_slide2.jpg)'
    });*/
  });
});