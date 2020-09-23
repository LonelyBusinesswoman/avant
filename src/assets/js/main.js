import $ from "jquery"
// slick
require('slick-carousel');
require('slick-carousel/slick/slick.css');

import MaskInput from 'mask-input';

import "magnific-popup";

$(document).ready(function() {
    
    // scroll
    let header = $('header');
    let scrollPos = 30;
    $(window).on('scroll', function(){
        if($(window).scrollTop() > scrollPos){
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
    })
    // slick slider 
    $('.slider').slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        customPaging : function(slider, i) {
            return '<div class="line"></div><div class="circle"></div>';
        }
    });

    // second screen slider
    $('.second_slider').slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        fade: true,
        prevArrow: '<div class="prev"><img class="prev_arrow" src="assets/img/prev_arrow.svg" alt="arrow"></div>',
        nextArrow: '<div class="next"><img class="next_arrow" src="assets/img/next_arrow.svg" alt="arrow"></div>'
    });

    $('.second_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        let $current = $('.second_slider .slick-slide[data-slick-index='+ currentSlide+']');
        let $next = $('.second_slider .slick-slide[data-slick-index='+ nextSlide+']');

        $current.find('.slider_photo').css('opacity', '0');
        $current.find('.name').css('opacity', '0');
        $current.find('.description').css('opacity', '0');
        $next.find('.name').css('opacity', '0');
        $next.find('.plashka_wrap').css('opacity', '0');
        $next.find('.description').css('opacity', '0');
    });

    $('.second_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        let $current = $('.second_slider .slick-slide[data-slick-index='+ currentSlide+']');
        $current.find('.slider_photo').animate({opacity: 1},500);
        $current.find('.name').animate({opacity: 1},600);
        $current.find('.description').animate({opacity: 1},600);
    });

    var $status = $('.current_slide');
    var $all_slides = $('.all_slides');
    var $slickElement = $('.second_slider');
    var total_number = $(".slider").slick("getSlick").slideCount-2;
    $all_slides.text(total_number);

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i);
        $all_slides.text(slick.slideCount);
    });

    // third slider
    $('.feedback_slider').slick({
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<div class="prev2"><img class="prev_arrow2" src="assets/img/prev_arrow.svg" alt="arrow"></div>',
        nextArrow: '<div class="next2"><img class="next_arrow2" src="assets/img/next_arrow.svg" alt="arrow"></div>',
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1
              }
            },
        ]
    });
    var $status_feedback = $('.count2 .current_slide2');
    var $all_slides_feedback = $('.count2 .all_slides2');
    var $slickElement_feedback = $('.feedback_slider');
    var total_number_feedback = $(".feedback_slider").slick("getSlick").slideCount;
    $all_slides_feedback.text(total_number_feedback);

    $slickElement_feedback.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status_feedback.text(i);
        $all_slides_feedback.text(slick.slideCount);

    });

   
  

    //  scroll to form
    $(function(){
        $('.to_form').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#form_section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    // nav scroll
    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 150}, 1000);
    });
    // img popup

    $('.image-popup').magnificPopup({
        type: 'image'
    });
    
    
 
    const maskInput = new MaskInput(document.querySelector('.input_tel'), {
        mask: '+7(000)000-00-00',
        alwaysShowMask: true,
        maskChar: '_',
    });

    // MOBILE MENU SETTINGS
    $('.mobile_menu').click(function(){
        $('.mobile').addClass('active');
          })
          $('.close_mob_menu').click(function(){
            $('.mobile').removeClass('active');
          })
          $('.mobile .wrap a').click(function(){
            $('.mobile').removeClass('active');
          })
          $(document).click(function(e){
            if( 
              $('.mobile').hasClass('active') && 
              $('.mobile_menu').has(e.target).length == 0 &&
              $('.mobile').has(e.target).length == 0
            )
            {
              $('.mobile').removeClass('active');
            }
        });

});

