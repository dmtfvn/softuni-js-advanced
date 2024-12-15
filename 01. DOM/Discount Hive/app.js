window.addEventListener('load', solve);

function solve() {
  const addBtn = document.querySelector('#add-btn');

  const discountEl = document.querySelector('#discount');
  const dateEl = document.querySelector('#date');
  const storeEl = document.querySelector('#store');
  const productEl = document.querySelector('#product');
  const codeEl = document.querySelector('#code');

  const checkListEl = document.querySelector('#check-list');
  const validateListEl = document.querySelector('#validate-list');
  const discountListEl = document.querySelector('#discount-list');

  const clearBtn = document.querySelector('#clear');

  function createListel(discount, date, store, product, code) {
    const listEl = document.createElement('li');
    listEl.className = 'discount-content';

    const articleEl = document.createElement('article');

    articleEl.appendChild(createParaEl(`Expire: ${date}`));
    articleEl.appendChild(createParaEl(`Store: ${store}`));
    articleEl.appendChild(createParaEl(`Product: ${product}`));
    articleEl.appendChild(createParaEl(`Code: ${code}`));
    articleEl.appendChild(createParaEl(`Discount: ${discount}`));

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      discountEl.value = discount;
      dateEl.value = date;
      storeEl.value = store;
      productEl.value = product;
      codeEl.value = code;

      listEl.remove();

      addBtn.disabled = false;

    });

    const continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', () => {
      editBtn.remove();
      continueBtn.remove();
      listEl.remove();

      const validateBtn = document.createElement('button');
      validateBtn.className = 'validate-btn';
      validateBtn.textContent = 'Validate';
      validateBtn.addEventListener('click', () => {
        validateBtn.remove();
        listEl.remove();

        discountListEl.appendChild(listEl);

        addBtn.disabled = false;
      });

      listEl.appendChild(validateBtn);

      validateListEl.appendChild(listEl);
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(continueBtn);

    checkListEl.appendChild(listEl);
  }

  addBtn.addEventListener('click', () => {
    if (
      discountEl.value === '' ||
      dateEl.value === '' ||
      storeEl.value === '' ||
      productEl.value === '' ||
      codeEl.value === ''
    ) {
      return;
    }

    createListel(
      discountEl.value,
      dateEl.value,
      storeEl.value,
      productEl.value,
      codeEl.value
    );

    discountEl.value = '';
    dateEl.value = '';
    storeEl.value = '';
    productEl.value = '';
    codeEl.value = '';

    addBtn.disabled = true;
  });

  clearBtn.addEventListener('click', () => {
    const listItems = discountListEl.querySelectorAll('.discount-content');

    Array.from(listItems).forEach(item => item.remove());
  });

  function createParaEl(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}