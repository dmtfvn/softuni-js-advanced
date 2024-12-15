window.addEventListener('load', solve);

function solve() {
  const timeInput = document.querySelector('#time');
  const dateInput = document.querySelector('#date');
  const placeInput = document.querySelector('#place');
  const eventInput = document.querySelector('#event-name');
  const emailInput = document.querySelector('#email');

  const formBtn = document.querySelector('#add-btn');

  const checkList = document.querySelector('#check-list');
  const upcomingList = document.querySelector('#upcoming-list');
  const finishList = document.querySelector('#finished-list');

  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', () => {
    finishList.innerHTML = '';
  });

  function createListEl(time, date, place, event, email) {
    const listEl = document.createElement('li');
    listEl.className = 'event-content';

    const articleEl = document.createElement('article');

    articleEl.appendChild(createParagraph(`Begins: ${date} at: ${time}`));
    articleEl.appendChild(createParagraph(`In: ${place}`));
    articleEl.appendChild(createParagraph(`Event: ${event}`));
    articleEl.appendChild(createParagraph(`Contact: ${email}`));

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      timeInput.value = time;
      dateInput.value = date;
      placeInput.value = place;
      eventInput.value = event;
      emailInput.value = email;

      listEl.remove();

      formBtn.disabled = false;
    });

    const continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', () => {
      listEl.remove();
      editBtn.remove();
      continueBtn.remove();

      const moveToFinishBtn = document.createElement('button');
      moveToFinishBtn.className = 'finished-btn';
      moveToFinishBtn.textContent = 'Move to Finished';
      moveToFinishBtn.addEventListener('click', () => {
        listEl.remove();
        moveToFinishBtn.remove();
        finishList.appendChild(listEl);
      });

      listEl.appendChild(moveToFinishBtn);

      upcomingList.appendChild(listEl);

      formBtn.disabled = false;
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(continueBtn);

    checkList.appendChild(listEl);
  }

  formBtn.addEventListener('click', () => {
    if (
      timeInput.value === '' ||
      dateInput.value === '' ||
      placeInput.value === '' ||
      eventInput.value === '' ||
      emailInput.value === ''
    ) {
      return;
    }

    createListEl(
      timeInput.value,
      dateInput.value,
      placeInput.value,
      eventInput.value,
      emailInput.value
    );

    timeInput.value = '',
      dateInput.value = '',
      placeInput.value = '',
      eventInput.value = '',
      emailInput.value = ''

    formBtn.disabled = true;
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}