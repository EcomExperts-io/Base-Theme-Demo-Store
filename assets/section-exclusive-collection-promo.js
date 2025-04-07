document.addEventListener('DOMContentLoaded', function () {
  function initSwiper() {
    new Swiper('.swiper-exclusive-collection', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-exclusive-collection .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
      },
      loop: true,
      observer: true,
      observeParents: true,
    });
  }

  if (typeof Swiper !== 'undefined') {
    initSwiper();
  } else {
    document.querySelector('#collection-swiper-script').addEventListener('load', initSwiper);
  }

  document.addEventListener('shopify:section:load', function (event) {
    if (event.target.querySelector('.swiper-exclusive-collection')) {
      initSwiper();
    }
  });

  document.addEventListener('shopify:block:select', function (event) {
    if (event.target.closest('.swiper-exclusive-collection')) {
      initSwiper();
    }
  });
});