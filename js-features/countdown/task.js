const timer = document.getElementById("timer");

function startTimer() {
   timer.textContent -= 1;
   if (timer.textContent == 0) {
      alert("Вы победили в конкурсе!");
      clearInterval(timerId);
   }
}

let timerId = setInterval(startTimer, 1000);