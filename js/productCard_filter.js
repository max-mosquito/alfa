const filtrBtns = document.querySelectorAll('.filtrBtn');
const cards = document.getElementsByClassName('singleCategory_row_card');
const arr = [...cards]

function resetFilterPanel() {
   filtrBtns.forEach(item => {
      item.classList.remove('active');
   })
}

function filter() {
   const newA = arr.filter(item => {
      item.getAttribute('data-sort') === 'weel'
   })
   console.log(newA);
}

filtrBtns.forEach(item => {
   item.addEventListener('click', () => {
      resetFilterPanel()
      item.classList.add('active')
      console.log(item.getAttribute('data-sort'));
   }) 
})

// console.log(cards[0].getAttribute('data-sort') === 'weel');