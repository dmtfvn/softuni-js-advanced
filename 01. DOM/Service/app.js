window.addEventListener('load', solve);

function solve() {
  const formBtn = document.querySelector('#right form');

  const selectEl = document.querySelector('#type-product');
  const descriptionEl = document.querySelector('#description');
  const clientNameEl = document.querySelector('#client-name');
  const clientPhoneEl = document.querySelector('#client-phone');

  const receivedOrdersEl = document.querySelector('#received-orders');
  const completedOrdersEl = document.querySelector('#completed-orders');

  const clearBtn = document.querySelector('.clear-btn');

  function createDivEl(select, description, clientName, clientPhone) {
    const divEl = document.createElement('div');
    divEl.className = 'container';

    const h2El = document.createElement('h2');
    h2El.textContent = `Product type for repair: ${select}`;

    const h3El = document.createElement('h3');
    h3El.textContent = `Client information: ${clientName}, ${clientPhone}`;

    const h4El = document.createElement('h4');
    h4El.textContent = `Description of the problem: ${description}`;

    divEl.appendChild(h2El);
    divEl.appendChild(h3El);
    divEl.appendChild(h4El);

    const startBtn = document.createElement('button');
    startBtn.className = 'start-btn';
    startBtn.textContent = 'Start repair';
    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;
      finishBtn.disabled = false;
    });

    const finishBtn = document.createElement('button');
    finishBtn.className = 'finish-btn';
    finishBtn.textContent = 'Finish repair';
    finishBtn.addEventListener('click', () => {
      startBtn.remove();
      finishBtn.remove();
      divEl.remove();

      completedOrdersEl.appendChild(divEl);
    });

    finishBtn.disabled = true;

    divEl.appendChild(startBtn);
    divEl.appendChild(finishBtn);

    receivedOrdersEl.appendChild(divEl);
  }

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      descriptionEl.value === '' ||
      clientNameEl.value === '' ||
      clientPhoneEl.value === ''
    ) {
      return;
    }

    createDivEl(
      selectEl.value,
      descriptionEl.value,
      clientNameEl.value,
      clientPhoneEl.value
    );

    descriptionEl.value = '';
    clientNameEl.value = '';
    clientPhoneEl.value = '';
  });

  clearBtn.addEventListener('click', () => {
    const orders = completedOrdersEl.querySelectorAll('.container');

    Array.from(orders).forEach(el => el.remove());
  });
}