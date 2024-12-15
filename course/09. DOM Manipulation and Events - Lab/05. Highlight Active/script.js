function focused() {
  const container = document.querySelector('div');

  [...container.children].forEach(el => {
    el.children[1].addEventListener('focus', (e) => {
      e.target.parentNode.classList.add('focused');
    });

    el.children[1].addEventListener('blur', (e) => {
      e.target.parentNode.classList.remove('focused');
    });
  });
}