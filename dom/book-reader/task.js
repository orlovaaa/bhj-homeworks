const book = document.getElementById('book');
const font = Array.from(document.querySelectorAll('.font-size'));

for (let i = 0; i < font.length; i++) {
   font[i].addEventListener('click', (e) => {
      e.preventDefault();
      for (let i = 0; i < font.length; i++) {
         if (font[i].classList.contains('font-size_active')) {
            font[i].classList.toggle('font-size_active');
         }
      }

      font[i].classList.toggle('font-size__active');
      font[i].classList.toggle('font-size_active');
      if (font[i].classList.contains('font-size_small')) {
         book.className = "book book_fs-small";
      } else if (font[i].classList.contains('font-size_big')) {
         book.className = "book book_fs-big";
      } else {
         book.className = "book";
      }


   });
}