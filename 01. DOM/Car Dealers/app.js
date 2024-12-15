window.addEventListener("load", solve);

function solve() {
  const formBtn = document.querySelector('#publish');

  const makeIp = document.querySelector('#make');
  const modelIp = document.querySelector('#model');
  const yearIp = document.querySelector('#year');
  const pickFuel = document.querySelector('#fuel');
  const origCostIp = document.querySelector('#original-cost');
  const sellPriceIp = document.querySelector('#selling-price');

  const tableBodyEl = document.querySelector('#table-body');
  const carsListEl = document.querySelector('#cars-list');

  const totalProfit = document.querySelector('#profit');

  function createListEl(make, model, year, fuel, origCost, sellPrice) {
    const trEl = document.createElement('tr');
    trEl.className = 'row';

    trEl.appendChild(createTableDataEl(make));
    trEl.appendChild(createTableDataEl(model));
    trEl.appendChild(createTableDataEl(year));
    trEl.appendChild(createTableDataEl(fuel));
    trEl.appendChild(createTableDataEl(origCost));
    trEl.appendChild(createTableDataEl(sellPrice));

    const tdEl = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      makeIp.value = make;
      modelIp.value = model;
      yearIp.value = year;
      pickFuel.value = fuel;
      origCostIp.value = origCost;
      sellPriceIp.value = sellPrice;

      trEl.remove();
    });

    const sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', () => {
      trEl.remove();

      const listEl = document.createElement('li');
      listEl.className = 'each-list';

      listEl.appendChild(createSpanEl(`${make} ${model}`));
      listEl.appendChild(createSpanEl(year));

      const carProfit = sellPrice - origCost;
      listEl.appendChild(createSpanEl(carProfit));

      carsListEl.appendChild(listEl);

      const curProfit = Number(totalProfit.textContent);
      const final = (curProfit + carProfit).toFixed(2);

      totalProfit.textContent = final;
    });

    tdEl.appendChild(editBtn);
    tdEl.appendChild(sellBtn);

    trEl.appendChild(tdEl);

    tableBodyEl.appendChild(trEl);
  }

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      makeIp.value === '' ||
      modelIp.value === '' ||
      yearIp.value === '' ||
      pickFuel.value === '' ||
      origCostIp.value === '' ||
      sellPriceIp.value === '' ||
      origCostIp.value > sellPriceIp.value
    ) {
      return;
    }

    createListEl(
      makeIp.value,
      modelIp.value,
      yearIp.value,
      pickFuel.value,
      origCostIp.value,
      sellPriceIp.value
    );

    makeIp.value = '';
    modelIp.value = '';
    yearIp.value = '';
    pickFuel.value = '';
    origCostIp.value = '';
    sellPriceIp.value = '';
  });

  function createTableDataEl(content) {
    const td = document.createElement('td');
    td.textContent = content;

    return td;
  }

  function createSpanEl(content) {
    const span = document.createElement('span');
    span.textContent = content;

    return span;
  }
}