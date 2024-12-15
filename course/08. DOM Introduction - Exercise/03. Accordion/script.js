function toggle() {
  const btnEl = document.querySelector('.button');
  const contentEl = document.querySelector('#extra');

  if (contentEl.style.display !== 'block') {
    btnEl.textContent = 'Less';
    contentEl.style.display = 'block';
  } else if (contentEl.style.display !== 'none') {
    btnEl.textContent = 'More';
    contentEl.style.display = 'none';
  }
}