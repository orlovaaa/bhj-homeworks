const list = document.querySelector('.dropdown__list');
const value = document.querySelector('.dropdown__value');
const item = document.querySelectorAll('.dropdown__item');
Array.from(item);

value.addEventListener('click', () => {
   list.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < item.length; i++) {
   item[i].addEventListener('click', (e) => {
      e.preventDefault();
      value.textContent = item[i].textContent;
      list.classList.toggle('dropdown__list_active');
   });
}