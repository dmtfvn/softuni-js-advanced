function solve() {
  const nameInput = document.querySelector('#container input:nth-child(1)');
  const hallInput = document.querySelector('#container input:nth-child(2)');
  const priceInput = document.querySelector('#container input:nth-child(3)');

  const formBtn = document.querySelector('#container button');

  const moviesOnScreenEl = document.querySelector('#movies ul');
  const archiveEl = document.querySelector('#archive ul');

  const clearBtn = document.querySelector('#archive button');

  function createListEl(name, hall, price) {
    const listEl = document.createElement('li');

    const spanEl = document.createElement('span');
    spanEl.textContent = name;

    const strongEl = document.createElement('strong');
    strongEl.textContent = `Hall: ${hall}`;

    const divEl = document.createElement('div');

    const divStrong = document.createElement('strong');
    divStrong.textContent = Number(price).toFixed(2);

    const divInput = document.createElement('input');
    divInput.setAttribute('placeholder', 'Tickets Sold');

    const divBtn = document.createElement('button');
    divBtn.textContent = 'Archive';
    divBtn.addEventListener('click', () => {
      if (divInput.value === '' || isNaN(divInput.value)) {
        return;
      }

      strongEl.remove();
      divEl.remove();
      listEl.remove();

      const totalPrice = Number(price) * Number(divInput.value);

      const strEl = document.createElement('strong');
      strEl.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', () => {
        listEl.remove();
      });

      listEl.appendChild(strEl);
      listEl.appendChild(delBtn);

      archiveEl.appendChild(listEl);
    });

    divEl.appendChild(divStrong);
    divEl.appendChild(divInput);
    divEl.appendChild(divBtn);

    listEl.appendChild(spanEl);
    listEl.appendChild(strongEl);
    listEl.appendChild(divEl);

    moviesOnScreenEl.appendChild(listEl);
  }

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (nameInput.value === '' || hallInput.value === '' || priceInput.value === '' || isNaN(priceInput.value)) {
      return;
    }

    createListEl(
      nameInput.value,
      hallInput.value,
      priceInput.value
    );

    nameInput.value = '';
    hallInput.value = '';
    priceInput.value = '';
  });

  clearBtn.addEventListener('click', () => {
    archiveEl.innerHTML = '';
  });
}