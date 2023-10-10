//autoGrader tabs ------------

const autoGradersHesders = document.querySelectorAll('.autoGraders_tabs_item');
const autoGradersTabsContent = document.querySelectorAll('.autoGraders_tabs_content_item')

function removeActiveTabs() {
   autoGradersHesders.forEach(item => {
      item.classList.remove('active')
   })
   autoGradersTabsContent.forEach(item => {
      item.classList.remove('active')
   })
}

autoGradersHesders.forEach((item, i) => {
   item.addEventListener('click', () => {
      removeActiveTabs()
      item.classList.add('active')
      autoGradersTabsContent[i].classList.add('active')
   })
   
})