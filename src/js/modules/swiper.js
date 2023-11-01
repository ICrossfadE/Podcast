import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const swiper = new Swiper(".reviews-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 30,
});
