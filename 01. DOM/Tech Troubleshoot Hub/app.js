window.addEventListener('load', solution);

function solution() {
  const employeeInput = document.querySelector('#employee');
  const categoryInput = document.querySelector('#category');
  const urgencyInput = document.querySelector('#urgency');
  const assignedTeamInput = document.querySelector('#team');
  const descriptionInput = document.querySelector('#description');

  const formBtn = document.querySelector('#add-btn');

  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolveList = document.querySelector('.resolved-list');

  function createListEl(employee, category, urgency, assignedTeam, description) {
    const listEl = document.createElement('li');
    listEl.className = 'problem-content';

    const articleEl = document.createElement('article');

    articleEl.appendChild(createParagraph(`From: ${employee}`));
    articleEl.appendChild(createParagraph(`Category: ${category}`));
    articleEl.appendChild(createParagraph(`Urgency: ${urgency}`));
    articleEl.appendChild(createParagraph(`Assigned to: ${assignedTeam}`));
    articleEl.appendChild(createParagraph(`Description: ${description}`));

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      employeeInput.value = employee;
      categoryInput.value = category;
      urgencyInput.value = urgency;
      assignedTeamInput.value = assignedTeam;
      descriptionInput.value = description;

      listEl.remove();

      formBtn.disabled = false;
    });

    const continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', () => {
      listEl.remove();
      editBtn.remove();
      continueBtn.remove();

      const resolveBtn = document.createElement('button');
      resolveBtn.className = 'resolve-btn';
      resolveBtn.textContent = 'Resolved';
      resolveBtn.addEventListener('click', () => {
        listEl.remove();
        resolveBtn.remove();

        const clearBtn = document.createElement('button');
        clearBtn.className = 'clear-btn';
        clearBtn.textContent = 'Clear';
        clearBtn.addEventListener('click', () => {
          resolveList.innerHTML = '';
        });

        listEl.appendChild(clearBtn);

        resolveList.appendChild(listEl);
      });

      listEl.appendChild(resolveBtn);

      pendingList.appendChild(listEl);
    });


    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(continueBtn);

    previewList.appendChild(listEl);
  }

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      employeeInput.value === '' ||
      categoryInput.value === '' ||
      urgencyInput.value === '' ||
      assignedTeamInput.value === '' ||
      descriptionInput.value === ''
    ) {
      return;
    }

    createListEl(
      employeeInput.value,
      categoryInput.value,
      urgencyInput.value,
      assignedTeamInput.value,
      descriptionInput.value
    );

    employeeInput.value = '';
    categoryInput.value = '';
    urgencyInput.value = '';
    assignedTeamInput.value = '';
    descriptionInput.value = '';

    formBtn.disabled = true;
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}