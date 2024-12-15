function solve() {
  const addTaskEl = document.querySelector('form');

  addTaskEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = e.target.querySelector('#task').value;
    const description = e.target.querySelector('#description').value;
    const date = e.target.querySelector('#date').value;

    if (task && description && date) {
      createTask(task, description, date);

      e.target.reset();
    }
  });

  function createTask(task, description, date) {
    const openArea = document.querySelector('.wrapper section:nth-child(2) > div:nth-child(2)');
    const taskEl = document.createElement('article');

    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    h3.textContent = task;
    p1.textContent = `Description: ${description}`;
    p2.textContent = `Due Date: ${date}`;

    const actionEl = document.createElement('div');
    actionEl.className = 'flex';

    const progressBtn = document.createElement('button');
    progressBtn.className = 'green';
    progressBtn.textContent = 'Start';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'red';
    deleteBtn.textContent = 'Delete';

    progressBtn.addEventListener('click', (e) => {
      const curTask = e.target.closest('article');
      const nextSectionEl = e.target.closest('section').nextElementSibling.querySelector('div:nth-child(2)');
      const curActionEl = e.target.closest('div');

      if (e.target.textContent === 'Start') {
        e.target.textContent = 'Finish';
        e.target.className = 'orange';

        e.target.remove();

        curActionEl.appendChild(e.target);
      } else {
        curActionEl.remove();
      }

      nextSectionEl.appendChild(curTask);
    });

    deleteBtn.addEventListener('click', () => deleteTask(taskEl));

    actionEl.append(progressBtn, deleteBtn);

    taskEl.append(h3, p1, p2, actionEl);

    openArea.appendChild(taskEl);
  }

  function deleteTask(task) {
    task.remove();
  }
}