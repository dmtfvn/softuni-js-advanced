function attachGradientEvents() {
  const boxEl = document.querySelector('#gradient');
  const outputEl = document.querySelector('#result');

  boxEl.addEventListener('mousemove', (e) => {
    const positionX = Math.floor(e.offsetX / e.target.clientWidth * 100);

    outputEl.textContent = `${positionX}%`;
  });
}