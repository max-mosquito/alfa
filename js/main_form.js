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