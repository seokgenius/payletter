$(document).ready(function(){
  //top button animation
  $('.top').click(function() {
    $('html, body').animate({scrollTop : 0}, 500);
    return false;
  });
  
  //delay
  $('.main-video .banner-list').addClass('load');
  
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    //main-solution
    if (scroll >= 800) {
      $('.main-solution .solution-list .solution-item span').addClass('show');
      $('.main-solution .solution-list .solution-item h3').addClass('show');
      $('.main-solution .solution-list .solution-item .solution-slide').addClass('show');
    } else {
      $('.main-solution .solution-list .solution-item span').removeClass('show');
      $('.main-solution .solution-list .solution-item h3').removeClass('show');
      $('.main-solution .solution-list .solution-item .solution-slide').removeClass('show');
    }
    
    //main-description
    if (scroll >= 1750) {
      $('.main-aboutus .desc h3').addClass('show');
      $('.main-aboutus .desc .text').addClass('show');
      $('.main-aboutus .stat .stat-list').addClass('show');
    } else {
      $('.main-aboutus .desc h3').removeClass('show');
      $('.main-aboutus .desc .text').removeClass('show');
      $('.main-aboutus .stat .stat-list').removeClass('show');
    }
    
    //main-aboutus-box
    if (scroll >= 2000) {
      $('.main-aboutus .contents .contents-area .text-area .contents-title').addClass('show');
      $('.main-aboutus .contents .contents-area .text-area .contents-text').addClass('show');
    } else {
      $('.main-aboutus .contents .contents-area .text-area .contents-title').removeClass('show');
      $('.main-aboutus .contents .contents-area .text-area .contents-text').removeClass('show');
    }
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
              delay: 5000,
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
  
      var mainNewsContainer = $('.main-news .news-contents');
            var mainNewsItems = $('.news-item');
            var mainNewsNavigation = $('.news-nav');
            var options = {};

            if(mainNewsItems.length <= 4) {
               /* mainNewsContainer.css('width', '1100px');*/
                mainNewsNavigation.hide();
                options = {
                    slidesPerView: 'auto',
                    /*spaceBetween: 24,*/
                    navigation: false
                };
            } else {
                options = {
                    autoplay: {
                      delay: 3000,
                    },
                    loop: true,
                    initialSlide: 1,
                    slidesPerView: 'auto',
                    /*spaceBetween: 24,*/
                    centeredSlides: true,
                    navigation: {
                        nextEl: '.news-contents .news-nav-next',
                        prevEl: '.news-contents .news-nav-prev'
                    }
                };
            }

        var mainNewsSwiper = new Swiper ('.main-news .news-contents', options);
  
  
  /*var mainNewsSwiper = new Swiper ('.main-news .news-contents', {
            loop: true,
            navigation: {
                nextEl: '.news-contents .news-nav-next',
                prevEl: '.news-contents .news-nav-prev'
            },
            autoplay : {
                      delay: 5000,
            },
        });*/
  
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