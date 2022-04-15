const chatWidget = document.querySelector(".chat-widget");
const messageChat = document.getElementById("chat-widget__messages");
const input = document.getElementById("chat-widget__input");

chatWidget.addEventListener("click", () => {
   chatWidget.classList.add("chat-widget_active");
});

function getMessage() {
   const messages = [
      'Добрый день!',
      'Кто тут?',
      'К сожалению все операторы сейчас заняты. Не пишите нам больше!',
      'Мы ничего не будем вам продавать',
      'Меня постоянно преследуют умные мысли, но я быстрее...',
      'Попозже отвечу, я сейчас не могу материться.',
      'Где ваша совесть?'
   ];
   
   const index = Math.floor(Math.random() * messages.length);

   return messages[index];
}

window.addEventListener('keyup', (e) => {
   if ((e.code === 'Enter' || e.code === 'NumpadEnter') && input.value) {
      messageChat.innerHTML +=
         `<div class='message message_client'>
         <div class='message__text'>
         ${input.value}
         </div>
         </div>`;
      
      input.value = '';

      messageChat.innerHTML +=
         `<div class='message'>
         <div class='message__text'>
         ${getMessage()}
         </div>
         </div>`;
   }
});
