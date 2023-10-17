const cityBtn = document.querySelectorAll('#city option');
const typeBtn = document.querySelectorAll('#type option');
const map = document.querySelectorAll('.map_pic_city');

function resetMap() {
   map.forEach(item => {
      item.classList.remove('active')
   })
}

cityBtn.forEach((item, i) => {
   item.addEventListener('click', () => {
      
      console.log(item.value);
      item.classList.add('zctive')
   })
})