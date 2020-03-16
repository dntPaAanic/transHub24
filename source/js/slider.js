'use strict';

(function () {
  var containers = document.querySelectorAll('.js-slider');

  // eslint-disable-next-line consistent-return
  var getPhotoSlider = function (slider) {
    if (slider) {
      var container = slider.querySelector('.swiper-container');
      var slidesPerView = 1;
      var spaceBetween = 0;
      var next;
      var prev;
      var pagination;
      if (slider.classList.contains('slider__section-wrapper')) {
        slidesPerView = 'auto';
        spaceBetween = 60;
        next = slider.querySelector('.slider__button--next');
        prev = slider.querySelector('.slider__button--prev');
        pagination = slider.querySelector('.slider__pagination');
      }
      return new window.Swiper(container, {
        slidesPerView: slidesPerView,
        spaceBetween: spaceBetween,
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        pagination: {
          el: pagination,
          clickable: true
        },
      });
    }
  };

  containers.forEach(function (currentValue) {
    getPhotoSlider(currentValue);
  });


})();


