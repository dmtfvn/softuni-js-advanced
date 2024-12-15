window.addEventListener("load", solve);

function solve() {
  const nameInput = document.querySelector('#snowman-name');
  const heightInput = document.querySelector('#snowman-height');
  const locationInput = document.querySelector('#location');
  const creatorInput = document.querySelector('#creator-name');
  const selectAttribute = document.querySelector('#special-attribute');

  const addBtn = document.querySelector('.add-btn');

  const previewEl = document.querySelector('.snowman-preview');
  const snowmanEl = document.querySelector('.snow-list');

  const mainEl = document.querySelector('#hero');
  const imageEl = document.querySelector('#back-img');

  function createListEl(name, height, location, creator, select) {
    const listEl = document.createElement('li');
    listEl.className = 'snowman-info';

    const articleEl = document.createElement('article');

    articleEl.appendChild(createParagraph(`Name: ${name}`));
    articleEl.appendChild(createParagraph(`Height: ${height}`));
    articleEl.appendChild(createParagraph(`Location: ${location}`));
    articleEl.appendChild(createParagraph(`Creator: ${creator}`));
    articleEl.appendChild(createParagraph(`Attribute: ${select}`));

    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      nameInput.value = name;
      heightInput.value = height;
      locationInput.value = location;
      creatorInput.value = creator;
      selectAttribute.value = select;

      listEl.remove();

      addBtn.disabled = false;
    });

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', () => {
      listEl.remove();
      btnContainer.remove();
      snowmanEl.appendChild(listEl);

      const sendBtn = document.createElement('button');
      sendBtn.className = 'send-btn';
      sendBtn.textContent = 'Send';
      sendBtn.addEventListener('click', () => {
        mainEl.remove();

        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', () => {
          window.location.reload();
        });

        document.body.appendChild(backBtn);
        imageEl.removeAttribute('hidden');
      });

      articleEl.appendChild(sendBtn);
    });

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    listEl.appendChild(articleEl);
    listEl.appendChild(btnContainer);

    previewEl.appendChild(listEl);
  }

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      nameInput.value === '' ||
      heightInput.value === '' ||
      locationInput.value === '' ||
      creatorInput.value === '' ||
      selectAttribute.value === ''
    ) {
      return;
    }

    createListEl(
      nameInput.value,
      heightInput.value,
      locationInput.value,
      creatorInput.value,
      selectAttribute.value
    );

    nameInput.value = '';
    heightInput.value = '';
    locationInput.value = '';
    creatorInput.value = '';
    selectAttribute.value = '';

    addBtn.disabled = true;
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}