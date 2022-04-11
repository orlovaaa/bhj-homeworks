const rotator = Array.from(document.querySelectorAll('.rotator'));
const rotatorCase = rotator.map(() => Array.from(document.querySelectorAll('.rotator__case')));

for (let rotate of rotatorCase) {
   let i = 0;
   
   setInterval(() => {
      if (i === rotate.length) {
         i = 0;
      }

      rotate[i].classList.toggle("rotator__case_active");

      if (i === rotate.length - 1) {
         rotate[0].classList.toggle("rotator__case_active");
      } else {
         rotate[i + 1].classList.toggle("rotator__case_active");
      }

      i++;

   }, 1000);
  }