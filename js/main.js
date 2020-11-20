const $menuBtn = document.querySelector('.menu__burger');
const $menuList = document.querySelector('.menu__list');

document.addEventListener("DOMContentLoaded", () => { 
  $menuBtn.addEventListener('click', () => {
    $menuList.classList.toggle('menu__list--active');
  });


  const mySwiper = new Swiper('.heroes__slider-img', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    
    

    pagination: {
      el: '.swiper-pagination',
    },  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  const mySwiper2 = new Swiper('.heroes__slider-text', {

    direction: 'horizontal',
    loop: true,
    effect: 'fade',    
    fadeEffect: {
      crossFade: true
    },


  });
  
  mySwiper.controller.control = mySwiper2;
  mySwiper2.controller.control = mySwiper;

});