
const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');

function addTask(e) {
   e.preventDefault();

   const task = document.createElement('div');
   const taskTitle = document.createElement('div');
   const taskRemove = document.createElement('a');
   
   task.className = 'task';
   taskTitle.className = 'task__title';
   taskRemove.className = 'task__remove';

   taskTitle.textContent = `${input.value}`;

   taskRemove.href = '#';
   taskRemove.innerText = `×`;

   task.appendChild(taskTitle);
   task.appendChild(taskRemove);

   if (input.value && (input.value).trim().length) {
      tasksList.appendChild(task);
      input.value = '';
      taskRemove.addEventListener('click', (e) => {
         e.preventDefault();
         task.remove();
      });
   } else {
      alert('Введите задачу!');
   }
}

window.addEventListener('keyup', (e) => {
   if (e.key === 'Enter') {
      addTask(e);
   }
});

button.addEventListener('click', (e) => {
   addTask(e);
});