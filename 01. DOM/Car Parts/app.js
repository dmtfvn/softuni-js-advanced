window.addEventListener('load', solve);

function solve() {
  const carModelInput = document.querySelector('#car-model');
  const carYearInput = document.querySelector('#car-year');
  const partNameInput = document.querySelector('#part-name');
  const partNumberInput = document.querySelector('#part-number');
  const conditionInput = document.querySelector('#condition');

  const formBtn = document.querySelector('#next-btn');

  const infoList = document.querySelector('.info-list');
  const confirmList = document.querySelector('.confirm-list');

  const completeImg = document.querySelector('#complete-img');
  const completeText = document.querySelector('#complete-text');

  function createListEl(cModel, cYear, pName, pNumber, condition) {
    const listEl = document.createElement('li');
    listEl.className = 'part-content';

    const articleEl = document.createElement('article');

    articleEl.appendChild(createParagraph(`Car Model: ${cModel}`));
    articleEl.appendChild(createParagraph(`Car Year: ${cYear}`));
    articleEl.appendChild(createParagraph(`Part Name: ${pName}`));
    articleEl.appendChild(createParagraph(`Part Number: ${pNumber}`));
    articleEl.appendChild(createParagraph(`Condition: ${condition}`));

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      carModelInput.value = cModel;
      carYearInput.value = cYear;
      partNameInput.value = pName;
      partNumberInput.value = pNumber;
      conditionInput.value = condition;

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

      const confirmBtn = document.createElement('button');
      confirmBtn.className = 'confirm-btn';
      confirmBtn.textContent = 'Confirm';
      confirmBtn.addEventListener('click', () => {
        confirmList.innerHTML = '';

        completeImg.style.visibility = 'visible';
        completeText.textContent = 'Part is Ordered!';

        formBtn.disabled = false;
      });

      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'cancel-btn';
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', () => {
        confirmList.innerHTML = '';

        formBtn.disabled = false;
      });

      listEl.appendChild(confirmBtn);
      listEl.appendChild(cancelBtn);

      confirmList.appendChild(listEl);
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(continueBtn);

    infoList.appendChild(listEl);
  }

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      carModelInput.value === '' ||
      carYearInput.value === '' ||
      partNameInput.value === '' ||
      partNumberInput.value === '' ||
      conditionInput.value === '' ||
      carYearInput.value <= 1980 ||
      carYearInput.value >= 2023
    ) {
      return;
    }

    createListEl(
      carModelInput.value,
      carYearInput.value,
      partNameInput.value,
      partNumberInput.value,
      conditionInput.value
    );

    carModelInput.value = '';
    carYearInput.value = '';
    partNameInput.value = '';
    partNumberInput.value = '';
    conditionInput.value = '';

    completeImg.style.visibility = 'hidden';
    completeText.textContent = '';

    formBtn.disabled = true;
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
};