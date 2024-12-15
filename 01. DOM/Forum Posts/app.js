window.addEventListener("load", solve);

function solve() {
  const formBtn = document.querySelector('#publish-btn');

  const titleIp = document.querySelector('#post-title');
  const categoryIp = document.querySelector('#post-category');
  const contentIp = document.querySelector('#post-content');

  const reviewListEl = document.querySelector('#review-list');
  const publishedListEl = document.querySelector('#published-list');

  const clearBtn = document.querySelector('#clear-btn')

  function createListEl(title, category, content) {
    const listEl = document.createElement('li');
    listEl.className = 'rpost';

    const articleEl = document.createElement('article');

    const h4El = document.createElement('h4');
    h4El.textContent = title;

    const pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${category}`;

    const pContent = document.createElement('p');
    pContent.textContent = `Content: ${content}`;

    articleEl.appendChild(h4El);
    articleEl.appendChild(pCategory);
    articleEl.appendChild(pContent);

    const editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      titleIp.value = title;
      categoryIp.value = category;
      contentIp.value = content;

      listEl.remove();
    });

    const approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', () => {
      editBtn.remove();
      approveBtn.remove();
      listEl.remove();

      publishedListEl.appendChild(listEl);
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(approveBtn);

    reviewListEl.appendChild(listEl);
  }

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      titleIp.value === '' ||
      categoryIp.value === '' ||
      contentIp.value === ''
    ) {
      return;
    }

    createListEl(
      titleIp.value,
      categoryIp.value,
      contentIp.value
    );

    titleIp.value = '';
    categoryIp.value = '';
    contentIp.value = '';
  });

  clearBtn.addEventListener('click', () => {
    publishedListEl.innerHTML = '';
  });
}