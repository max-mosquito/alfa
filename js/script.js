const burger = document.getElementById('burger');
const headerTopMenu = document.getElementById('header_top_menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   headerTopMenu.classList.toggle('active');
   document.body.classList.toggle('lock');
})

//slider_main------------
const swiper_main = new Swiper('.slider_main', {
   loop: true,
   spaceBetween: 32,
   autoplay: true,
   pagination: {
     el: '.swiper-pagination',
   },
 });
 
 //swiper_comments--------------
 const swiper_comments = new Swiper('.slider_comments', {
  spaceBetween: 32,

  pagination: {
    el: '.comments_swiper_pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.comments_swiper_button_next',
    prevEl: '.comments_swiper_button_prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 1.5,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 1.75,
      spaceBetween: 40
    }
  }
});

 //swiper_partners--------------
 const slider_partners = new Swiper('.slider_partners', {
  spaceBetween: 32,
  slidesPerView: 3.5,

  pagination: {
    el: '.partners_swiper_pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.partners_swiper_button_next',
    prevEl: '.partners_swiper_button_prev',
  },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20
  //   },
  //   991: {
  //     slidesPerView: 1.5,
  //     spaceBetween: 40
  //   },
  //   1200: {
  //     slidesPerView: 3.5,
  //     spaceBetween: 40
  //   }
  // }
});