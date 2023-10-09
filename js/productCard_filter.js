const filtrBtns = document.querySelectorAll('.filtrBtn');
const cards = document.getElementsByClassName('singleCategory_row_card');
const arr = [...cards]

function resetFilterPanel() {
   filtrBtns.forEach(item => {
      item.classList.remove('active');
   })
}

function filter(target) {

}

filtrBtns.forEach(item => {
   item.addEventListener('click', () => {
      resetFilterPanel()
      item.classList.add('active')
      console.log(item.getAttribute('data-sort'));
   }) 
})