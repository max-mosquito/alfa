const burger = document.getElementById('burger');
const headerTopMenu = document.getElementById('header_top_menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   headerTopMenu.classList.toggle('active');
   document.body.classList.toggle('lock');
})



//catalog-----------------------------
const catalogBtn = document.getElementById('catalog');
const dropdownCatalog = document.getElementById('dropdown_header');
const listTechBtn = document.querySelectorAll('.dropdown_header_lis_item');
const techPic= document.querySelectorAll('.dropdown_header_pic_item');

catalogBtn.addEventListener('mouseover', (e) => {
  // e.stopPropagation();
  catalogBtn.classList.add('active');
  dropdownCatalog.classList.add('active');
  document.body.classList.add('lock');
})

catalogBtn.addEventListener('mouseout', (e) => {
  // e.stopPropagation();
  catalogBtn.classList.remove('active');
  dropdownCatalog.classList.remove('active');
  document.body.classList.remove('lock');
})

function hidePic() {
  techPic.forEach(item => {
    item.classList.remove('active')
  })
}

listTechBtn.forEach((item, i) => {
  item.addEventListener('mouseover', () => {
    hidePic();
    techPic[i - 1].classList.add('active');
  })
})