const popup = document.getElementById('subscribe-modal');
const popupClose = popup.querySelector('.modal__close');

function getCookie(name) {
   const value = '; ' + document.cookie;
   let parts = value.split('; ' + name + '=');

   if (parts.length === 2) {
      return parts.pop().split(';').shift();
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const cookie = getCookie('modal');

   if (cookie !== 'close') {
      popup.className = 'modal modal_active';

      popupClose.addEventListener('click', () => {
         popup.className = 'modal';
         document.cookie = 'modal=close';
      });
   }
});