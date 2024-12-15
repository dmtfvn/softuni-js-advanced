function create(words) {
  const container = document.querySelector('#content');

  for (const el of words) {
    const boxEl = document.createElement('div');
    const strEl = document.createElement('p');
    strEl.textContent = el;

    strEl.style.display = 'none';

    boxEl.appendChild(strEl);

    container.appendChild(boxEl)

    boxEl.addEventListener('click', (e) => {
      e.target.querySelector('p').style.display = 'block';
    });
  }
}