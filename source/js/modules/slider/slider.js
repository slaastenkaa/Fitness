import Swiper from '../../vendor/swiper';

export function initSlider() {
  const trainersSlider = new Swiper('.trainers__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 33,
    // centeredSlides: true,
    grabCursor: true, // менять иконку курсора
    autoplay: {
      delay: 5000,
    },
    speed: 400,
    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1199px
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 33,
    centeredSlides: true,
    grabCursor: true, // менять иконку курсора
    // autoplay: {
    //   delay: 5000,
    // },
    // speed: 400,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};
