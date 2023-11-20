//repairParts tabs ------------

const repairPartsHesders = document.querySelectorAll('.repairParts_tabs_headers_item');
const repairPartsTabsContent = document.querySelectorAll('.repairParts_tabs_content_item')

function removeActiveTabs() {
   repairPartsHesders.forEach(item => {
      item.classList.remove('active')
   })
   repairPartsTabsContent.forEach(item => {
      item.classList.remove('active')
   })
}

repairPartsHesders.forEach((item, i) => {
   item.addEventListener('click', () => {
      removeActiveTabs()
      item.classList.add('active')
      repairPartsTabsContent[i].classList.add('active')
   })
   
})