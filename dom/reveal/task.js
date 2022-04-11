const reveal = document.querySelectorAll('.reveal');
Array.from(reveal);

window.addEventListener('scroll', () => {
   for (let i = 0; i < reveal.length; i++) {
      const { top, bottom } = reveal[i].getBoundingClientRect();
      if (top < window.innerHeight) {
         if (top > 0) {
            reveal[i].classList.toggle('reveal_active');
         }
      }
   }
});