const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

for (let i = 0; i < hasTooltip.length; i++) {
   hasTooltip[i].addEventListener('click', show);
}

function show(e) {
   e.preventDefault();

   const next = this.nextElementSibling;
   
   if (Boolean(next) && next.classList.contains('tooltip')) {
      next.classList.toggle('tooltip_active');
   } else {
      const div = document.createElement('div');
      div.classList.add('tooltip', 'tooltip_active');
      div.innerText = this.title;

      const left = this.getBoundingClientRect().left;
      const top = this.getBoundingClientRect().bottom;

      div.style.left = left + "px";
      div.style.top = top + "px";

      this.insertAdjacentElement('afterEnd', div);
   }
}