const filtrBtns = document.querySelectorAll('.filtrBtn');
const cards = document.querySelectorAll('.filter_item');

function allVisible() {
   cards.forEach(item => {
      item.classList.add('active')
   })
}

allVisible()

function allHide() {
   cards.forEach(item => {
      item.classList.remove('active')
   })
}

function resetFilterPanel() {
   filtrBtns.forEach(item => {
      item.classList.remove('active')
   })
}

function addActive(typeTech) {
   cards.forEach(item => {
      if(item.getAttribute('data-sort') === typeTech){
         item.classList.add('active')
      }
      if(typeTech ==='all'){
         allVisible()
      }
   })
}

filtrBtns.forEach(item => {
   item.addEventListener('click', () => {
      allHide()
      resetFilterPanel()
      item.classList.add('active')
      const typeTech = item.getAttribute('data-sort')
      addActive(typeTech)
   })
})