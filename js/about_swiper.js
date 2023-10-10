const about_slider1 = new Swiper('.about_foto_tabs_content_slider1', {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 16,
   pagination: {
     el: '.about_foto_swiper_pagination1',
     type: 'fraction',
   },
   navigation: {
     nextEl: '.about_foto_swiper_button_next1',
     prevEl: '.about_foto_swiper_button_prev1',
   },
   breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      }
    }
 });
 
 const about_slider2 = new Swiper('.about_foto_tabs_content_slider2', {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 16,
   pagination: {
     el: '.about_foto_swiper_pagination2',
     type: 'fraction',
   },
   navigation: {
     nextEl: '.about_foto_swiper_button_next2',
     prevEl: '.about_foto_swiper_button_prev2',
   },
   breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
 });

 //tabs -------------
 const about_fotoTabHeaders = document.querySelectorAll('.about_foto_tabs_headers_item');
 const about_fotoTabsContent = document.querySelectorAll('.about_foto_tabs_content_item')

 function productCardTabsNoActive() {
   about_fotoTabHeaders.forEach(item => {
      item.classList.remove('active');
   })
   about_fotoTabsContent.forEach(item => {
      item.classList.remove('active');
   })
 }

 about_fotoTabHeaders.forEach((item, i) => {
   item.addEventListener('click', () => {
      productCardTabsNoActive();
      item.classList.add('active');
      about_fotoTabsContent[i].classList.add('active');
   })
 })