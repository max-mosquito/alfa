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
		}else{
			popupForm.reset();
			alert(response.statusText);
		}
	})
})