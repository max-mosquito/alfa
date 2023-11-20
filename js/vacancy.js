//tabs -------------
const vacancyTabHeaders = document.querySelectorAll('.vacancy_tabs_headers_item');
const vacancyTabsContent = document.querySelectorAll('.vacancy_tabs_content_item')

function TabsNoActive() {
   vacancyTabHeaders.forEach(item => {
     item.classList.remove('active');
  })
  vacancyTabsContent.forEach(item => {
     item.classList.remove('active');
  })
}

vacancyTabHeaders.forEach((item, i) => {
  item.addEventListener('click', () => {
     TabsNoActive();
     item.classList.add('active');
     vacancyTabsContent[i].classList.add('active');
  })
})