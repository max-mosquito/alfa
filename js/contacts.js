//tabs -------------
const contactsTabHeaders = document.querySelectorAll('.contacts_tabs_headers_item');
const contactsTabsContent = document.querySelectorAll('.contacts_tabs_content_item')

function TabsNoActive() {
   contactsTabHeaders.forEach(item => {
     item.classList.remove('active');
  })
  contactsTabsContent.forEach(item => {
     item.classList.remove('active');
  })
}

contactsTabHeaders.forEach((item, i) => {
  item.addEventListener('click', () => {
     TabsNoActive();
     item.classList.add('active');
     contactsTabsContent[i].classList.add('active');
  })
})