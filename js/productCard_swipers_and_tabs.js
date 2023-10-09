//productCard_primary_slider_single-------------------------
const productCard_primary_slider_single = new Swiper('.productCard_primary_slider_single', {
   
   slidesPerView: 1,
   spaceBetween: 10,
   thumbs: {
      swiper: {
         el: '.productCard_primary_slider_mini',
         slidesPerView: 3,
      }
   }
 })
 
 //tabs -------------
 const productCardTabHeaders = document.querySelectorAll('.productCard_secondary_tabs_headers_item');
 const productCardTabsContent = document.querySelectorAll('.productCard_secondary_tabs_content_item')

 function productCardTabsNoActive() {
   productCardTabHeaders.forEach(item => {
      item.classList.remove('active');
   })
   productCardTabsContent.forEach(item => {
      item.classList.remove('active');
   })
 }

 productCardTabHeaders.forEach((item, i) => {
   item.addEventListener('click', () => {
      productCardTabsNoActive();
      item.classList.add('active');
      productCardTabsContent[i].classList.add('active');
   })
 })

 //slider watched-------------
 const watchedSlider = new Swiper('.productCard_secondary_watched_slider', {

   slidesPerView: 1.2,
   spaceBetween: 8,
   loop: true,
   breakpoints: {
     320: {
       slidesPerView: 1,
     },
     575: {
       slidesPerView: 1.2,
     },
   }
 })
 
 // accordion ---------------------
 const productCardAccordeonHeader = document.querySelectorAll('.productCard_secondary_accordeon_item_header');
 const productCardAccordeonContent = document.querySelectorAll('.productCard_secondary_accordeon_item_content')

function hideAccordionItems() {
   productCardAccordeonHeader.forEach(item => {
      item.classList.remove('active')
   })
   productCardAccordeonContent.forEach(item => {
      item.classList.remove('active')
   })
}

 productCardAccordeonHeader.forEach((item, i) => {
   item.addEventListener('click', () => {
      hideAccordionItems()
      item.classList.add('active');
      productCardAccordeonContent[i].classList.add('active');
   })
 })