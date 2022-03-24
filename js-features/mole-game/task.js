const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const getHole = index => document.getElementById(`hole${index}`);

function repeatGame() {
   dead.textContent = 0;
   lost.textContent = 0;
}

for (let i = 1; i < 10; i++) {
   const hole = getHole(i);
   hole.onclick = function () {
      if (hole.classList.contains('hole_has-mole')) {
         dead.textContent++;
      } else {
         lost.textContent++;
      }

      if (dead.textContent > 10) {
         alert("You win!");
         repeatGame();
      } else if (lost.textContent > 5) {
         alert("You lose!");
         repeatGame();
      }
   };
}