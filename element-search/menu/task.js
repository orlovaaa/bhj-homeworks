
const menuLink = document.querySelectorAll('.menu__link');

Array.from(menuLink);

for (let i = 0; i < menuLink.length; i++) {
   menuLink[i].onclick = () => {
      if (menuLink[i].parentElement.querySelector('.menu_sub').classList.contains('menu_active')) {
         menuLink[i].parentElement.querySelector('.menu_sub').classList.remove('menu_active');
         return false;
      }

      if (menuLink[i].parentElement.querySelector('.menu_sub')) {
         if (menuLink[i].closest('.menu_main').querySelector('.menu_active')) {
            menuLink[i].closest('.menu_main').querySelector('.menu_active').classList.remove('.menu_active');
         }
         menuLink[i].parentElement.querySelector('.menu_sub').classList.add('menu_active');
         return false;
      }

   };
}
