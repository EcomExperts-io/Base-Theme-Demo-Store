if (!customElements.get('hero-banner-slider')) {
  class HeroBannerSlider extends HTMLElement {
    constructor() {
      super();
      this.swiper = null;
    }

    connectedCallback() {
      if (typeof Swiper !== 'undefined') {
        this.initSwiper();
      } else {
        document.querySelector('#swiper-script').addEventListener('load', () => this.initSwiper());
      }
    }

    initSwiper() {
      const slides = document.querySelectorAll('.swiper-hero-banner .swiper-wrapper > *');

      // Only initialize Swiper if there's more than one slide
      if (slides.length > 1) {
        this.swiper = new Swiper('.swiper-hero-banner', {
          slidesPerView: 1,
          spaceBetween: 0,
          direction: 'horizontal',
          autoHeight: true, // Enable auto height
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      } else {
        // Hide pagination if there's only one slide
        const pagination = document.querySelector('.swiper-pagination');
        if (pagination) {
          pagination.style.display = 'none';
        }
      }
    }

    disconnectedCallback() {
      if (this.swiper) {
        this.swiper.destroy();
      }
    }
  }

  customElements.define('hero-banner-slider', HeroBannerSlider);
}