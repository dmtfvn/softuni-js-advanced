function validate() {
  const patterns = {
    username: /^[a-zA-Z0-9]{3,20}$/,
    email: /^.*@.*\..*$/,
    password: /^\w{5,15}$/,
    "confirm-password": /^\w{5,15}$/,
    companyNumber: /^\w{4,4}$/
  };

  const formEl = document.querySelector('#registerForm');
  const companyEl = document.querySelector('#company');
  const companyInfoEl = document.querySelector('#companyInfo');
  const validEl = document.querySelector('#valid');

  companyEl.addEventListener('change', (e) => {
    companyInfoEl.style.display = (e.target.checked) ? 'block' : 'none';
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const redFields = [];

    const inputFieldEls = [...e.target.querySelectorAll('input:not([type="checkbox"])')];

    inputFieldEls.forEach(el => {
      const type = el.getAttribute('id');
      const paswordEl = e.target.querySelector('#password');

      if (type === 'companyNumber' && companyInfoEl.style.display === 'none') {
        return;
      }

      if (!patterns[type].test(el.value)) {
        el.style.borderColor = 'red';
        redFields.push(el);
      } else {
        el.style.borderColor = '';
      }

      if (type === 'confirm-password' && el.value !== paswordEl.value) {
        redFields.push(el);
        redFields.push(paswordEl);

        el.style.borderColor = 'red';
        paswordEl.style.borderColor = 'red';
      }
    });

    validEl.style.display = (redFields.length === 0) ? 'block' : 'none';
  });
}