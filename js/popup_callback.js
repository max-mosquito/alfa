//popup_callback--------------------
const headerIndiCallbackLink = document.getElementById('header_indi_callback_link')
const popupCallback = document.getElementById('popup_callback');
const popupCallbackClose = document.getElementById('popup_callback_close');

headerIndiCallbackLink.addEventListener('click', (e) => {
  e.preventDefault()
  popupCallback.classList.add('active');
  document.body.classList.add('lock');
})

popupCallbackClose.addEventListener('click', () => {
  popupCallback.classList.remove('active');
  document.body.classList.remove('lock');
})

//popup_confirm------------------------
const popupConfirm = document.getElementById('popup_confirm');
const confirmCloseBtns = document.querySelectorAll('.popup_confirm_close_btn')

confirmCloseBtns.forEach(item => {
  item.addEventListener('click', () => {
    popupConfirm.classList.remove('active');
    document.body.classList.remove('lock');
  })
})

//send email---------------
const popupForm = document.querySelector('.popup_form');

popupForm.addEventListener('submit', (e)=>{
	e.preventDefault();

	fetch('mail_popup.php', {
	   method: 'POST',
	   body: new FormData(popupForm) 
	})
	.then(response => {
		if(response.status === 200 && response.statusText == "OK"){
			popupForm.reset();
      document.getElementById('popup_confirm').classList.add('active')
      popupCallback.classList.remove('active')
		}else{
			popupForm.reset();
			alert(response.statusText);
		}
	})
})