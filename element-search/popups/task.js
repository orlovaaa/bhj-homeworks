const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
modalMain.classList.add('modal_active');

const modalMainClose = modalMain.querySelector('.modal__close');
modalMainClose.addEventListener('click', () => modalMain.remove('modal_active'));

const modalMainShow = modalMain.querySelector('.show-success');
modalMainShow.addEventListener('click', () => {
   modalMain.remove('modal_active');
   modalSuccess.classList.add('modal_active');
});

const modalSuccessClose = modalSuccess.querySelector('.modal__close');
modalSuccessClose.addEventListener('click', () => modalSuccess.remove('modal_active'));

const modalSuccessShow = modalSuccess.querySelector('.btn_success');
modalSuccessShow.addEventListener('click', () => modalSuccess.remove('modal_active'));