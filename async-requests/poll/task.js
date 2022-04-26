const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send();

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      const xhrResponse = JSON.parse(xhr.responseText);
      pollTitle.innerHTML = xhrResponse.data.title;

      for (let i = 0; i < xhrResponse.data.answers.length; i++) {
         let button = document.createElement('button');
         button.className = 'poll__answer';
         button.textContent = xhrResponse.data.answers[i];
         pollAnswer.appendChild(button);

         button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Спасибо, ваш ответ засчитан');
         });
      }
   }
});