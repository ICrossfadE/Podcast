import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const swiper = new Swiper(".reviews-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 3,
  spaceBetween: 30,
});
