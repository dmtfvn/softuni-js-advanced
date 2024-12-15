function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputEl, outputEl] = document.querySelectorAll('textarea');

  const listEl = document.querySelector('.table tbody');

  generateBtn.addEventListener('click', () => {
    const data = JSON.parse(inputEl.value);

    data.forEach(el => {
      const curProduct = document.createElement('tr');

      const curProductImg = document.createElement('td');
      const productImg = document.createElement('img');
      productImg.setAttribute('src', el.img);
      curProductImg.appendChild(productImg);

      const curProductName = document.createElement('td');
      const productName = document.createElement('p');
      productName.textContent = el.name;
      curProductName.appendChild(productName);

      const curProductPrice = document.createElement('td');
      const productPrice = document.createElement('p');
      productPrice.textContent = el.price;
      curProductPrice.appendChild(productPrice);

      const curProductDecFactor = document.createElement('td');
      const productDecFactor = document.createElement('p');
      productDecFactor.textContent = el.decFactor;
      curProductDecFactor.appendChild(productDecFactor);

      const curProductCheck = document.createElement('td');
      const productInput = document.createElement('input');
      productInput.setAttribute('type', 'checkbox');
      curProductCheck.appendChild(productInput);

      curProduct.append(
        curProductImg,
        curProductName,
        curProductPrice,
        curProductDecFactor,
        curProductCheck
      );

      listEl.appendChild(curProduct);
    });
  });

  buyBtn.addEventListener('click', () => {
    const data = [...document.querySelectorAll('tbody tr:has(input:checked)')].map(el => ({
      name: el.childNodes[1].textContent,
      price: Number(el.childNodes[2].textContent),
      decFactor: Number(el.childNodes[3].textContent)
    }));

    let output = `Bought furniture: ${data.map(el => el.name).join(', ')}\n`;
    output += `Total price: ${data.reduce((acc, el) => acc + el.price, 0).toFixed(2)}\n`;
    output += `Average decoration factor: ${data.reduce((acc, el) => acc + el.decFactor, 0) / data.length}`;

    outputEl.value = output;
  });
}