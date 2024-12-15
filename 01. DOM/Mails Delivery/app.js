function solve() {
  const formBtnAdd = document.querySelector('#add');
  const formBtnReset = document.querySelector('#reset');

  const nameEl = document.querySelector('#recipientName');
  const titleEl = document.querySelector('#title');
  const messageEl = document.querySelector('#message');

  const mailsListEl = document.querySelector('#list');
  const sentListEl = document.querySelector('.sent-list');
  const deleteListEl = document.querySelector('.delete-list');

  function createListEl(name, title, message) {
    const listEl = document.createElement('li');

    const h4TitleEl = document.createElement('h4');
    h4TitleEl.textContent = `Title: ${title}`;

    const h4NameEl = document.createElement('h4');
    h4NameEl.textContent = `Recipient Name: ${name}`;

    const spanEl = document.createElement('span');
    spanEl.textContent = message;

    const divBtns = document.createElement('div');
    divBtns.id = 'list-action';

    const sendBtn = document.createElement('button');
    sendBtn.type = 'submit';
    sendBtn.id = 'send';
    sendBtn.textContent = 'Send';
    sendBtn.addEventListener('click', () => {
      h4TitleEl.remove();
      h4NameEl.remove();
      spanEl.remove();
      divBtns.remove();
      listEl.remove();

      const spanName = document.createElement('span');
      spanName.textContent = `To: ${name}`;

      const spanTitle = document.createElement('span');
      spanTitle.textContent = `Title: ${title}`;

      const divEl = document.createElement('div');
      divEl.className = 'btn';

      const delBtn = document.createElement('button');
      delBtn.type = 'submit';
      delBtn.className = 'delete';
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', () => {
        divEl.remove();
        listEl.remove();

        deleteListEl.appendChild(listEl);
      });

      divEl.appendChild(delBtn);

      listEl.appendChild(spanName);
      listEl.appendChild(spanTitle);
      listEl.appendChild(divEl);

      sentListEl.appendChild(listEl);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'submit';
    deleteBtn.id = 'delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      h4TitleEl.remove();
      h4NameEl.remove();
      spanEl.remove();
      divBtns.remove();
      listEl.remove();

      const spanName = document.createElement('span');
      spanName.textContent = `To: ${name}`;

      const spanTitle = document.createElement('span');
      spanTitle.textContent = `Title: ${title}`;

      listEl.appendChild(spanName);
      listEl.appendChild(spanTitle);

      deleteListEl.appendChild(listEl);
    });

    divBtns.appendChild(sendBtn);
    divBtns.appendChild(deleteBtn);

    listEl.appendChild(h4TitleEl);
    listEl.appendChild(h4NameEl);
    listEl.appendChild(spanEl);
    listEl.appendChild(divBtns);

    mailsListEl.appendChild(listEl);
  }

  formBtnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      nameEl.value === '' ||
      titleEl.value === '' ||
      messageEl.value === ''
    ) {
      return;
    }

    createListEl(
      nameEl.value,
      titleEl.value,
      messageEl.value
    );

    nameEl.value = '';
    titleEl.value = '';
    messageEl.value = '';
  });

  formBtnReset.addEventListener('click', (e) => {
    e.preventDefault();

    nameEl.value = '';
    titleEl.value = '';
    messageEl.value = '';
  });
}

solve();