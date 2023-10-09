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

//send email---------------
const mainForm = document.querySelector('.main_form');

mainForm.addEventListener('submit', (e)=>{
	e.preventDefault();

	fetch('mail_main.php', {
	   method: 'POST',
	   body: new FormData(mainForm) 
	})
	.then(response => {
		if(response.status === 200 && response.statusText == "OK"){
			mainForm.reset();
      document.getElementById('popup_confirm').classList.add('active')
		}else{
			mainForm.reset();
			alert(response.statusText);
		}
	})
})
