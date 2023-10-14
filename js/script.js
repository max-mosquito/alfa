//burger-----------------
const burger = document.getElementById('burger');
const headerTopMenu = document.getElementById('header_top_menu');
const closeTopMenu = document.getElementById('close_top_menu');

burger.addEventListener('click', () => {
  //  burger.classList.add('active');
   headerTopMenu.classList.add('active');
   document.body.classList.add('lock');
})

closeTopMenu.addEventListener('click', () => {
  headerTopMenu.classList.remove('active');
  document.body.classList.remove('lock');
})

//catalog-----------------------------
const catalogBtn = document.querySelectorAll('.catalogBtn');
const dropdownPic = document.querySelectorAll('.dropdown_header_pic_item');

function hidePic() {
  dropdownPic.forEach(item => {
    item.classList.remove('active')
  })
}

catalogBtn.forEach((item, i) => {
  item.addEventListener('mouseover', () => {
    hidePic()
    dropdownPic[i].classList.add('active');
  })
})

// const catalogBtn = document.getElementById('catalog');
// const dropdownCatalog = document.getElementById('dropdown_header');
// const listTechBtn = document.querySelectorAll('.dropdown_header_lis_item');
// const techPic= document.querySelectorAll('.dropdown_header_pic_item');

// catalogBtn.addEventListener('click', () => {
//   catalogBtn.classList.toggle('active');
//   dropdownCatalog.classList.toggle('active');
//   document.body.classList.toggle('lock');
// })

// function hidePic() {
//   techPic.forEach(item => {
//     item.classList.remove('active')
//   })
// }

// listTechBtn.forEach((item, i) => {
//   item.addEventListener('mouseover', () => {
//     hidePic();
//     techPic[i - 1].classList.add('active');
//   })
// })


