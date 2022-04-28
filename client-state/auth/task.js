const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id');

document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.id) {
      user.textContent = `${localStorage.id}`;
      welcome.className = 'welcome welcome_active';
   } else {
      signin.className = 'signin signin_active';
   }
});

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const xhr = new XMLHttpRequest();
   const formData = new FormData(form);

   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

   xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.DONE) {
         const response = JSON.parse(xhr.responseText);

         if (response.success === true) {
            localStorage.id = response.user_id;
            user.textContent = `${response.user_id}`;
            signin.className = 'signin';
            welcome.className = 'welcome welcome_active';
         } else {
            alert('Неверный пароль/логин');
         }
      }
   });
   xhr.send(formData);
});