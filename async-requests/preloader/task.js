const gif = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send();

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      gif.classList.remove('loader_active');

      const xhrResponse = JSON.parse(xhr.responseText);
      const response = xhrResponse.response.Valute;

      for (let i in response) {
         const item = document.createElement('div');
         const itemCode = document.createElement('div');
         const itemValue = document.createElement('div');
         const itemCurrency = document.createElement('div');

         item.className = 'item';
         itemCode.className = 'item__code';
         itemValue.className = 'item__value';
         itemCurrency.className = 'item__currency';

         itemCode.textContent = response[i].CharCode;
         itemValue.textContent = response[i].Value;
         itemCurrency.textContent = 'руб.';


         item.appendChild(itemCode);
         item.appendChild(itemValue);
         item.appendChild(itemCurrency);
         items.appendChild(item);
      }
   }
});