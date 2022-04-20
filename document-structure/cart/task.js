const product = Array.from(document.querySelectorAll('.product'));
const productImage = Array.from(document.querySelectorAll('.product__image'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const productsCart = document.querySelector('.cart__products');

const productDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productValue = Array.from(document.querySelectorAll('.product__quantity-value'));

for (let i = 0; i < productDec.length; i++) {
  productDec[i].addEventListener('click', () => {
    if (Number(productValue[i].textContent) > 1) {
      productValue[i].textContent = Number(productValue[i].textContent) - 1;
    }
  });

  productInc[i].addEventListener('click', () => {
    productValue[i].textContent = Number(productValue[i].textContent) + 1;
  });

  productAdd[i].addEventListener('click', () => {
    const productCart = Array.from(document.querySelectorAll('.cart__product'));

    if (productCart.find((x) => x.dataset.id === product[i].dataset.id)) {
      const count = productCart[i].querySelector('.cart__product-count');
      const newCount = count;

      newCount.textContent = Number(count.textContent) + Number(productValue[i].textContent);
      productCart[i].replaceChild(newCount, count);  
    } else {
      productsCart.innerHTML += `<div class="cart__product" data-id='${product[i].dataset.id}'>
      <img class="cart__product-image" src=${productImage[i].src} />
      <div class="cart__product-count">${productValue[i].textContent}</div>
      </div>`;
    }
  });
}



