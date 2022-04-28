const editor = document.getElementById('editor');
const btn = document.getElementById('button');

editor.addEventListener('input', () => {
   localStorage.text = editor.value;
});

document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.text) {
      editor.value = localStorage.text;
   }
});

btn.addEventListener('click', () => {
   editor.value = '';
   localStorage.clear();
});