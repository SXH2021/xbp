/*==========

Theme Name: DeCore - Architecture & Interior HTML5 Template
Theme Version: 1.0

==========*/

/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Reviews Slider JS
3.Brands Slider JS
4.Page Loader And WOW Animation JS
5.Menu Open JS
6.Sticky Header JS
7.Scroll To Top JS
8.Active Menu JS
==========*/


$(document).ready(function($) {

    // Whole Script Strict Mode Syntax
    "use strict";

    // Reviews Slider JS

    var reviews_slider = new Swiper(".reviews-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        speed: 2000,
        autoplay: true,
        grabCursor: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
            },
            "@01.00": {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            "@1.50": {
                slidesPerView: 1.9,
            },
        }
    });

    // Brands Slider JS

    var brands_slider = new Swiper(".brands-slider", {
        slidesPerView: 4.5,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 2000,

        breakpoints: {
            "@0.00": {
                slidesPerView: 2,
            },
            "@0.75": {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            "@1.50": {
                slidesPerView: 4,
            },
        }
    });

    // Page Loader And Wow Animation JS

    const loaderEl = document.getElementsByClassName('page-loader')[0];
    document.addEventListener('readystatechange', (event) => {
        const readyState = "complete";

        if (document.readyState == readyState) {
            // when document ready add lass to fadeout loader
            loaderEl.classList.add('fullpage-loader--invisible');

            // when loader is invisible remove it from the DOM
            setTimeout(() => {
                loaderEl.parentNode.removeChild(loaderEl);
            }, 2000)
            setTimeout(() => {
                $('body').removeClass('body-fixed');
                new WOW().init();
            }, 500)
        }
    });

    // Menu Open JS

    jQuery(".menu-toggle").click(function() {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    /* Mobile Navigation Menu Removeclass  */
    jQuery('.header-menu ul li a').click(function() {
        jQuery('.header-wrapper nav').removeClass('toggled');
    });

    // Sticky Header JS

    jQuery(window).scroll(function() { // this will work when your window scrolled.
        var height = jQuery(window).scrollTop(); //getting the scrolling height of window
        if (height > 20) {
            jQuery(".site-header").addClass("sticky_head");
        } else {
            jQuery(".site-header").removeClass("sticky_head");
        }
    });

    // Scroll To Top JS

    jQuery('#scrollToTop').click(function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


    // Active Menu JS

    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active-menu');
                sections.removeClass('active-menu');

                $(this).addClass('active-menu');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-menu');
            }
        });
    });

    nav.find('a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 200);

        return false;
    });


});