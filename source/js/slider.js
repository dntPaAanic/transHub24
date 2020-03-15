var mySwiper = new Swiper ('.slider__container', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 60,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
  pagination: {
    el: '.slider__pagination',
    clickable: true
  }
});


