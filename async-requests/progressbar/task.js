const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const xhr = new XMLHttpRequest();
   const formData = new FormData(form);

   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
   xhr.upload.onloadstart = () => {
      progress.value = 0.1;
   };

   xhr.upload.onprogress = () => {
      progress.value = Number(progress.value) + 0.1;
   };

   xhr.upload.onloadend = () => {
      progress.value = 1.0;
   };

   xhr.send(formData);
});