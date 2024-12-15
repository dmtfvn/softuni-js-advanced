window.addEventListener("load", solve);

function solve() {
  const gemInput = document.querySelector('#gem-name');
  const colorInput = document.querySelector('#color');
  const caratsInput = document.querySelector('#carats');
  const priceInput = document.querySelector('#price');
  const typeInput = document.querySelector('#type');

  const formBtn = document.querySelector('#add-btn');

  const previewList = document.querySelector('#preview-list');
  const collectionList = document.querySelector('#collection');
  collectionList.appendChild(document.createElement('li'));

  function createListEl(gem, color, carats, price, type) {
    const listEl = document.createElement('li');
    listEl.className = 'gem-info';

    const articleEl = document.createElement('article');

    const h4El = document.createElement('h4');
    h4El.textContent = gem;

    articleEl.appendChild(h4El);
    articleEl.appendChild(createParagraph(`Color: ${color}`));
    articleEl.appendChild(createParagraph(`Carats: ${carats}`));
    articleEl.appendChild(createParagraph(`Price: ${price}$`));
    articleEl.appendChild(createParagraph(`Type: ${type}`));

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save to Collection';
    saveBtn.addEventListener('click', () => {
      listEl.remove();

      const gemInfo = document.createElement('p');
      gemInfo.className = 'collection-item';
      gemInfo.textContent = `${gem} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

      const li = collectionList.querySelector('li');
      li.appendChild(gemInfo);

      collectionList.append(li);

      formBtn.disabled = false;
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Information';
    editBtn.addEventListener('click', () => {
      gemInput.value = gem;
      colorInput.value = color;
      caratsInput.value = carats;
      priceInput.value = price;
      typeInput.value = type;

      listEl.remove();

      formBtn.disabled = false;
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
      listEl.remove();

      formBtn.disabled = false;
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(saveBtn);
    listEl.appendChild(editBtn);
    listEl.appendChild(cancelBtn);

    previewList.appendChild(listEl);
  }

  formBtn.addEventListener('click', () => {
    if (
      gemInput.value === '' ||
      colorInput.value === '' ||
      caratsInput.value === '' ||
      priceInput.value === '' ||
      typeInput.value === ''
    ) {
      return;
    }

    createListEl(
      gemInput.value,
      colorInput.value,
      caratsInput.value,
      priceInput.value,
      typeInput.value
    );

    gemInput.value = '';
    colorInput.value = '';
    caratsInput.value = '';
    priceInput.value = '';
    typeInput.value = '';

    formBtn.disabled = true;
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}