const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
modalMain.classList.add('modal_active');

const modalMainClose = document.querySelectorAll('.modal__close_times');
Array.from(modalMainClose);

for (let i = 0; i < modalMainClose.length; i++) {
   modalMainClose[i].onclick = function () {
      this.closest('.modal').classList.remove('modal_active');
   };
}

const modalMainShow = modalMain.querySelector('.show-success');
modalMainShow.addEventListener('click', () => {
  modalMain.remove('modal_active');
  modalSuccess.classList.add('modal_active');
});
