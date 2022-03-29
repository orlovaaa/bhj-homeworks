const prevSlide = document.querySelector('.slider__arrow_prev');
const nextSlide = document.querySelector('.slider__arrow_next');

const slideItems = document.querySelectorAll('.slider__item');
let currentSlide = 0;
let maxCurrentSlide = slideItems.length - 1;

prevSlide.onclick = () => {
   slideItems[currentSlide].classList.toggle('slider__item_active');
   if (currentSlide === 0) {
      currentSlide = maxCurrentSlide;
   } else {
      currentSlide--;
   }
   slideItems[currentSlide].classList.toggle('slider__item_active');
};

nextSlide.onclick = () => {
   slideItems[currentSlide].classList.toggle('slider__item_active');
   if (currentSlide === maxCurrentSlide) {
      currentSlide = 0;
   } else {
      currentSlide++;
   }
   slideItems[currentSlide].classList.toggle('slider__item_active');
};





