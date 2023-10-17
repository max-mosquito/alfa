const cityBtn = document.querySelectorAll('#city option');
const typeBtn = document.querySelectorAll('#type option');
const map = document.querySelectorAll('.map_pic_city');
const types = document.querySelectorAll('.map_pic_wrap')

function resetMap() {
   map.forEach(item => {
      item.classList.remove('active');
      for(let i = 0; i < item.children.length; i++){
         item.children[i].classList.remove('active');
      }
   })
}

function resetType() {
   map.forEach(item => {
      for(let i = 0; i < item.children.length; i++){
         item.children[i].classList.remove('active');
      }
   })
}

cityBtn.forEach((item, i) => {
   item.addEventListener('click', () => {
      resetMap()
      console.log(item.value);
      map[i].classList.add('active');
      map[i].children[0].classList.add('active');
   })
})

typeBtn.forEach((item, i) => {
   item.addEventListener('click', () => {
      resetType()
      document.querySelector('.map_pic_city.active').children[i].classList.add('active');
   })
})