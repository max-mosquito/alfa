//popup_callback--------------------
const headerIndiCallbackLink = document.getElementById('header_indi_callback_link')
const popupCallback = document.getElementById('popup_callback');
const popupCallbackClose = document.getElementById('popup_callback_close');

headerIndiCallbackLink.addEventListener('click', () => {
  popupCallback.classList.add('active');
  document.body.classList.add('lock');
})

popupCallbackClose.addEventListener('click', () => {
  popupCallback.classList.remove('active');
  document.body.classList.remove('lock');
})

//popup_confirm------------------------
const popupConfirm = document.getElementById('popup_confirm');
const confirmCloseBtns = document.querySelectorAll('.popup_confirm_close_btn')

confirmCloseBtns.forEach(item => {
  item.addEventListener('click', () => {
    popupConfirm.classList.remove('active');
    document.body.classList.remove('lock');
  })
})