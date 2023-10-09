
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 768px
//     768: {
//       slidesPerView: 3
//     },
//     // when window width is >= 1200px
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 28
//     }
//   }
// });


var swiper = new Swiper(".mySwiper1", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 28
    }
  }
});




//   Swiper for reviews section


var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 16
        
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 16
        
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 28
        
      }
    }

});