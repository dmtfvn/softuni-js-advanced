window.addEventListener("load", solve);

function solve() {
  const purchaseBtn = document.querySelector('#purchase-btn');

  const ticketsInput = document.querySelector('#num-tickets');
  const seatingInput = document.querySelector('#seating-preference');
  const nameInput = document.querySelector('#full-name');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#phone-number');

  const ticketPreviewList = document.querySelector('#ticket-preview');
  const ticketPurchaseList = document.querySelector('#ticket-purchase');

  const bottomContent = document.querySelector('.bottom-content');

  function createListEl(tickets, seat, name, email, phone) {
    const listEl = document.createElement('li');
    listEl.className = 'ticket-purchase';

    const articleEl = document.createElement('article');

    articleEl.appendChild(createParagraph(`Count: ${tickets}`));
    articleEl.appendChild(createParagraph(`Preference: ${seat}`));
    articleEl.appendChild(createParagraph(`To: ${name}`));
    articleEl.appendChild(createParagraph(`Email: ${email}`));
    articleEl.appendChild(createParagraph(`Phone Number: ${phone}`));

    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      ticketsInput.value = tickets;
      seatingInput.value = seat;
      nameInput.value = name;
      emailInput.value = email;
      phoneInput.value = phone;

      listEl.remove();

      purchaseBtn.disabled = false;
    });

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', () => {
      btnContainer.remove();
      listEl.remove();
      ticketPurchaseList.appendChild(listEl);

      const buyBtn = document.createElement('button');
      buyBtn.className = 'buy-btn';
      buyBtn.textContent = 'Buy';
      buyBtn.addEventListener('click', () => {
        ticketPurchaseList.removeChild(listEl);

        const h2El = document.createElement('h2');
        h2El.textContent = 'Thank you for your purchase!';

        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.textContent = 'Back';

        bottomContent.appendChild(h2El);
        bottomContent.appendChild(backBtn);
      });

      articleEl.appendChild(buyBtn);
    });

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    listEl.appendChild(articleEl);
    listEl.appendChild(btnContainer);

    ticketPreviewList.appendChild(listEl);
  }

  purchaseBtn.addEventListener('click', () => {
    if (
      ticketsInput.value === '' ||
      seatingInput.value === '' ||
      nameInput.value === '' ||
      emailInput.value === '' ||
      phoneInput.value === ''
    ) {
      return;
    }

    createListEl(
      ticketsInput.value,
      seatingInput.value,
      nameInput.value,
      emailInput.value,
      phoneInput.value
    );

    ticketsInput.value = '';
    seatingInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    purchaseBtn.disabled = true;
  });

  bottomContent.addEventListener('click', (e) => {
    if (e.target.textContent === 'Back') {
      window.location.reload();
    }
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}