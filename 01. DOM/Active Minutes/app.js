window.addEventListener("load", solve);

function solve() {
  const typeInput = document.querySelector('#type');
  const intensityInput = document.querySelector('#intensity');
  const caloriesInput = document.querySelector('#calories');
  const durationInput = document.querySelector('#duration');
  const dateInput = document.querySelector('#date');

  const formBtn = document.querySelector('#add-activity');

  const previewActivity = document.querySelector('#preview-activity');
  const activitiesTable = document.querySelector('#activities-table');

  function createListEl(type, intensity, calories, duration, date) {
    const listEl = document.createElement('li');

    const articleEl = document.createElement('article');

    articleEl.appendChild(createParagraph(`Activity: ${type}`));
    articleEl.appendChild(createParagraph(`Intensity: ${intensity}`));
    articleEl.appendChild(createParagraph(`Duration: ${duration} min.`));
    articleEl.appendChild(createParagraph(`Date: ${date}`));
    articleEl.appendChild(createParagraph(`Calories: ${calories} `));////////   /////////////

    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      typeInput.value = type;
      intensityInput.value = intensity;
      caloriesInput.value = calories;
      durationInput.value = duration;
      dateInput.value = date;

      listEl.remove();

      formBtn.disabled = false;
    });

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', () => {
      listEl.remove();

      const trEl = document.createElement('tr');

      const tdType = document.createElement('td');
      tdType.className = 'type-cell';
      tdType.textContent = type;

      const tdDuration = document.createElement('td');
      tdDuration.className = 'duration-cell';
      tdDuration.textContent = duration;

      const tdCalories = document.createElement('td');
      tdCalories.className = 'calories-cell';
      tdCalories.textContent = calories;

      const tdDate = document.createElement('td');
      tdDate.className = 'date-cell';
      tdDate.textContent = date;

      const tdIntensity = document.createElement('td');
      tdIntensity.className = 'intensity-cell';
      tdIntensity.textContent = intensity;

      const tdBtn = document.createElement('td');
      tdBtn.className = 'btn-cell';

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        trEl.remove();
      });

      tdBtn.appendChild(deleteBtn);

      trEl.appendChild(tdType);
      trEl.appendChild(tdDuration);
      trEl.appendChild(tdCalories);
      trEl.appendChild(tdDate);
      trEl.appendChild(tdIntensity);
      trEl.appendChild(tdBtn);

      activitiesTable.appendChild(trEl);

      formBtn.disabled = false;
    });

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    listEl.appendChild(articleEl);
    listEl.appendChild(btnContainer);

    previewActivity.appendChild(listEl);
  }

  formBtn.addEventListener('click', () => {
    if (
      typeInput.value === '' ||
      intensityInput.value === '' ||
      caloriesInput.value === '' ||
      durationInput.value === '' ||
      dateInput.value === ''
    ) {
      return;
    }

    createListEl(
      typeInput.value,
      intensityInput.value,
      caloriesInput.value,
      durationInput.value,
      dateInput.value
    );

    typeInput.value = '';
    intensityInput.value = '';
    caloriesInput.value = '';
    durationInput.value = '';
    dateInput.value = '';

    formBtn.disabled = true;
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}