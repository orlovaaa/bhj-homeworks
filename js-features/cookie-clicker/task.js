const clicker = document.getElementById("clicker__counter");
const img = document.getElementById("cookie");

img.onclick = function () {
   clicker.textContent++;

   if (clicker.textContent % 2 == 0) {
      img.width = '150';
   } else if (clicker.textContent % 2 !== 0) {
      img.width = '200';
   }
};
