const tooltip = Array.from(document.querySelectorAll('.has-tooltip'));

const div = document.createElement('div');
div.className = 'tooltip';
tooltip[0].appendChild(div);

for (let i = 0; i < tooltip.length; i++) {
   tooltip[i].addEventListener('click', (e) => {
      e.preventDefault();

      if (div.textContent === tooltip[i].getAttribute('title')) {
         div.className = 'tooltip';
      } else {
         div.className = " tooltip tooltip_active";
      }
      div.textContent = `${tooltip[i].getAttribute('title')}`;
   });
}