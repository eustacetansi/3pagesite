const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    //  per view
    slidesPerView: 3,
    spaceBetween: 10,

    // auto play
    autoplay: {
        delay: 2000,
      },
      loop: true,


  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    //break point
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    2560: {
        slidesPerView: 3,
        spaceBetween: 300
      }
  }
  });
  