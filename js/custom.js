$(function() {
	$('.depth1').mouseenter(function() {
		$('.depth_box').stop().slideDown(400);
	});
	$('.depth1').mouseleave(function() {
		$('.depth_box').stop().slideUp(400);
	});

	function hd_on() {
		// aside on off
		$('.btn_menu, .btn_close').on('click', function() {
		   if ($('.aside').hasClass('on')) {
				$('.aside, .aside_bg').removeClass('on');
				$('html, body').css({'height':'inherit', 'overflow':'inherit'});
		   } else {
				$('.aside, .aside_bg').addClass('on');
				$('html, body').css({'height':'100%', 'overflow':'hidden'});
		   }
		});
		$('.aside .depth1').on('click', function() {
			$('.depth_list').not($(this).next()).slideUp();
			$(this).next().slideToggle();
		});
		// header on off
		$('.btn_toggle, .btn_lnb_close').each(function() {
			$(this).on('click', function() {
				$('#header').toggleClass('on');
			});
		});
	}
	hd_on();

    // 메인 비주얼 sld
	var swiper = new Swiper('.main_visual .swiper-container', {
		loop : true,
        pagination: {
			el: '.main_visual .swiper-pagination',
			type: "fraction",
		},
		spaceBetween: 0,
		navigation: {
			nextEl: '.main_visual .swiper-button-next',
			prevEl: '.main_visual .swiper-button-prev',
		},
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
	});
 
	// preview sld
    var swiper2 = new Swiper('.room_list .swiper-container', {
        loop : true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay:true,
        grabCursor: true,
		navigation: {
			nextEl: '.room_list .swiper-button-next',
			prevEl: '.room_list .swiper-button-prev',
		},
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            479: {
                slidesPerView:2,
                spaceBetween: 10,
            },
            861: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1201: {
                slidesPerView:3,
                spaceBetween: 20,
            },
        },
    });

    // 메인 special sld
	var swiper4 = new Swiper('.main_special .swiper-container', {
		loop : true,
        slidesPerView: 1,
        spaceBetween: 0,
		navigation: {
			nextEl: '.main_special .swiper-button-next',
			prevEl: '.main_special .swiper-button-prev',
		},
        pagination: {
			el: ".main_special .swiper-pagination",
			clickable: true,
        },
	});

    // 메인 special sld
	var swiper5 = new Swiper('.main_special .s_sld .swiper-container', {
		loop : true,
		paginationClickable: true,
        slidesPerView: 2,
        spaceBetween: 20,
		navigation: {
			nextEl: '.s_sld_arw .sld-next',
			prevEl: '.s_sld_arw .sld-prev',
		},
	});

    // 메인 about bnr sld
	var swiper5 = new Swiper('.main_about_bnr .swiper-container', {
		loop : true,
		paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 20,
        effect: "fade",
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
	});

    // 서브 special sld
	var swiper5 = new Swiper('.special_sld .s_sld .swiper-container', {
		loop : true,
		paginationClickable: true,
        slidesPerView: 2,
        spaceBetween: 20,
		navigation: {
			nextEl: '.s_sld_arw .sld-next',
			prevEl: '.s_sld_arw .sld-prev',
		},
        breakpoints: {
            280: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            641: {
                slidesPerView:2,
                spaceBetween: 15,
            },
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
	});

	// top btn
	$('.btn_top').on('click',function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $('body').offset().top}, 300);
	});

	// 하단 quick toggle
	$('.btn_toggle').on('click', function(e) {
		e.preventDefault();
		$('.footer_wrap').toggleClass('on');
	});

    $(window).scroll(function() {
		// header on
		if ($(window).scrollTop() > 0) {
			$('#header').addClass('on');
		} else {
			$('#header').removeClass('on');
		}

    });

});





