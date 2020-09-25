import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);

let bannerSwiper = new Swiper(".swiper-container_js", {
  speed: 400,
  spaceBetween: 10,
  loop: true,

  navigation: {
    nextEl: '.banner-navigation__next',
    prevEl: '.banner-navigation__prev',
  },
  pagination: {
    el: '.banner-pagination',
    type: 'bullets',
    bulletClass: 'banner-pagination__bullet',
    bulletActiveClass: 'banner-pagination__bullet_active',
    clickable: true,
    modifierClass: '',
    progressbarOpposite: true,
  },
});

let newsSwiper = new Swiper(".news__swiper-container_js", {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: '.news-navigation__next',
    prevEl: '.news-navigation__prev',
  },
  // breakpoints: {
  //   1100: {
  //     slidesPerView: 3,
  //   }
  // }
});