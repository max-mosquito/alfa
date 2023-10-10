//fromtLiftTrack tabs ------------

const frontLiftTrackHesders = document.querySelectorAll('.frontLiftTrack_tabs_item');
const frontLiftTrackTabsContent = document.querySelectorAll('.frontLiftTrack_tabs_content_item')

function removeActiveTabs() {
   frontLiftTrackHesders.forEach(item => {
      item.classList.remove('active')
   })
   frontLiftTrackTabsContent.forEach(item => {
      item.classList.remove('active')
   })
}

frontLiftTrackHesders.forEach((item, i) => {
   item.addEventListener('click', () => {
      removeActiveTabs()
      item.classList.add('active')
      frontLiftTrackTabsContent[i].classList.add('active')
   })
   
})