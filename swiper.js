const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperOne = document.querySelector(".swiper").swiper;

// Now you can use all slider methods like
swiperOne.slideNext();
