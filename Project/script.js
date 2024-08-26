const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
