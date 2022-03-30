
const menuLink = document.querySelectorAll('.menu__link');
Array.from(menuLink);

for (let i = 0; i < menuLink.length; i++) {
   menuLink[i].onclick = () => {
      const menuSub = menuLink[i].closest('.menu__item').querySelector('.menu_sub');

      if (menuSub) {
         if (menuSub !== document.querySelector('.menu_active') && document.querySelector('.menu_active')) {
            document.querySelector('.menu_active').classList.remove('menu_active');
         }

         menuSub.classList.toggle('menu_active');
         return false;
      }
   };
}
