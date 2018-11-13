import $ from 'jquery';
import slick from 'slick-carousel';

$(function() {
    $('.projects-slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
    });

    $('.prev').click(function() {
        $('.projects-slider').slick('slickPrev');
    })
    $('.next').click(function() {
        $('.projects-slider').slick('slickNext');
    })
});
  
