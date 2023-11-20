//send email---------------
const lisingForm = document.querySelector('.lising_form');

lisingForm.addEventListener('submit', (e)=>{
	e.preventDefault();

	fetch('mail_lising.php', {
	   method: 'POST',
	   body: new FormData(lisingForm) 
	})
	.then(response => {
		if(response.status === 200 && response.statusText == "OK"){
			lisingForm.reset();
      document.getElementById('popup_confirm').classList.add('active')
		}else{
			lisingForm.reset();
			alert(response.statusText);
		}
	})
})