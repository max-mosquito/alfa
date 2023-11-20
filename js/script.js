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

//catalog -----------------------------
const catalogBtn = document.querySelectorAll('.catalogBtn');
const dropdownPic = document.querySelectorAll('.dropdown_header_pic_item');
const catalog = document.getElementById('catalog');
const header = document.querySelector('.header');
const menuParent = document.getElementById('header_top_menu');
const menuChildren = document.querySelector('.dropdown_header_wrap');

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

catalog.addEventListener('click', () => {
  catalog.classList.toggle('active');
  if(window.screen.width > 991){
    if(catalog.classList.contains('active')){
      document.body.classList.add('lock');
      header.style.position = "relative";
      header.style.zIndex = '2'
    }else{
      document.body.classList.remove('lock');
      header.style.position = "";
      header.style.zIndex = ''
    }
  }else{
    if(catalog.classList.contains('active')){
    menuParent.style.height = 90 + 'vh'
    menuParent.style.overflow = 'scroll';
    }else{
    menuParent.style.height = 'auto';
    menuParent.style.overflow = 'unset';
    }
  }
})

//меню About--------------------
const dropdownAboutBtn = document.querySelector('.dropdown_about_btn');
dropdownAboutBtn.addEventListener('click',() => {
  dropdownAboutBtn.classList.toggle('active')
})


//mask phone----------------
maskPhone('.for_valid_tel')
