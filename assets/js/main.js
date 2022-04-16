
$(document).ready(function(){
  $('.banner-area').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 2000,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
  
   });
   $('.testimonial').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:true,
  
   });
   $('.image-popup').magnificPopup({
     type:'image',
     gallery:{
      enabled:true
    }
  });
})