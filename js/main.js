$(document).ready(function(){
  //top button animation
  $('.top').click(function() {
    $('html, body').animate({scrollTop : 0}, 400);
    return false;
  });
  
  //swiper
	var mainSolutionSwiper = new Swiper ('.solution-item-sol .slide-contents', {
            loop: true,
            navigation: {
                nextEl: '.solution-item-sol .swiper-navigation-button-next',
                prevEl: '.solution-item-sol .swiper-navigation-button-prev',
            },
            pagination : {
                el: ' .solution-item-sol .swiper-pagination',
								type: 'fraction',
									formatFractionCurrent: function (number) {
											return number < 10 ? '0' + number : number;
									},
									formatFractionTotal: function (number) {
											return number < 10 ? '0' + number : number;
									}
						},
            autoplay : {
              delay: 3000,
            },
	});
  
  function changeNumber(number) {
            return number < 10 ? '0' + number : number;
        }
  
  var mainCountSolution = $('.sol-cnt-sol');
        mainSolutionSwiper.on('slideChange', function () {
            mainCountSolution.text(changeNumber(mainSolutionSwiper.realIndex + 1));
        });
  
  var mainServiceSwiper = new Swiper ('.solution-item-ser .slide-contents', {
            loop: true,
            navigation: {
                nextEl: '.solution-item-ser .swiper-navigation-button-next',
                prevEl: '.solution-item-ser .swiper-navigation-button-prev',
            },
            pagination : {
                el: '.solution-item-ser .swiper-pagination',
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return number < 10 ? '0' + number : number;
                },
                formatFractionTotal: function (number) {
                    return number < 10 ? '0' + number : number;
                }
            },
            autoplay : {
                      delay: 5000,
            },
        });
  
  var mainCountService = $('.sol-cnt-ser');
        mainServiceSwiper.on('slideChange', function () {
            mainCountService.text(changeNumber(mainServiceSwiper.realIndex + 1));
        });

  var mainNewsSwiper = new Swiper ('.main-news .news-contents', {
            loop: true,
            navigation: {
                nextEl: '.news-contents .news-nav-next',
                prevEl: '.news-contents .news-nav-prev'
            },
  });
  
  var noticeSwiper = new Swiper('.notice-contents', {
            loop: true,
            speed: 500,
            direction: 'vertical',
            navigation: {
                nextEl: '.notice-nav-next',
                prevEl: '.notice-nav-prev'
            },
            autoplay: {
                delay: 5000,
            },
  });
});