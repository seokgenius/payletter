$(document).ready(function() {
    // header menu  
    // 반응형 전환시 처리
    $(window).on('resize', function() {
        if ($(window).width() <= 1023) {
            $('.main .main-video .video-wrap video').attr('src', 'img/m_main.mp4');
            $('.head-menu-btn').on('click', function() {
                $('.head-menu-cont').toggleClass('show');
                $(this).toggleClass('on');
                $('header .head-cont').toggleClass('on');
                $('header .head-logo').toggleClass('on');
                $('header .head-menu .head-menu-btn span').css({'transition': 'all 0.4s ease'});
                $(this).toggleClass('head-close-btn');
                $('header .head-menu .head-menu-btn span').css({'display': 'block'});
            });
            // mobile sub-menu
            $('header .head-menu .head-menu-list .head-menu-item > a').on('click', function() {
                $(this).parent().siblings().children().find('.head-sub-list').removeClass('show');
                $(this).next().toggleClass('show');
            });
        } else if ($(window).width() >= 1024){
            $('.main .main-video .video-wrap video').attr('src', 'img/main.mp4');
        }
    });
});