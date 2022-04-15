
const interest = Array.from(document.querySelectorAll('.interest'));

for (let i = 0; i < interest.length; i++) {
   const check = interest[i].querySelectorAll('.interest__check');
   check[0].addEventListener('change', () => {
      if (check[0].checked === true) {
         check.forEach((e) => (e.checked = true));
      } else {
         check.forEach((e) => (e.checked = false));
      }
   });
}
