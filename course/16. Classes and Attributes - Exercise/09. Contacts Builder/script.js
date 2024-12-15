class Contact {
  firstName;
  lastName;
  phone;
  email;

  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._online = false;
  }

  render(id) {
    const container = document.querySelector(`#${id}`);

    const articleEl = document.createElement(`article`);

    const titleEl = document.createElement('div');
    titleEl.classList.add('title');
    titleEl.setAttribute('data-id', `${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}-${this.email.toLowerCase()}`);
    titleEl.textContent = `${this.firstName} ${this.lastName}`;

    const btn = document.createElement('button');
    btn.innerHTML = '&#8505;';

    titleEl.appendChild(btn);

    const infoEl = document.createElement('div');
    infoEl.classList.add('info');
    infoEl.style.display = 'none';

    const phoneEl = document.createElement('span');
    phoneEl.innerHTML = `&phone; ${this.phone}`;

    const emailEl = document.createElement('span');
    emailEl.innerHTML = `&#9993; ${this.email}`;

    infoEl.append(phoneEl, emailEl);
    articleEl.append(titleEl, infoEl);

    container.appendChild(articleEl);

    btn.addEventListener('click', (e) => {
      const iIcon = e.target.closest('.title').nextElementSibling;

      iIcon.style.display = (iIcon.style.display === 'none') ? 'block' : 'none';
    });
  }

  get online() {
    return this._online;
  }

  set online(state) {
    this._online = state;

    const contactName = document.querySelector(`[data-id="${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}-${this.email.toLowerCase()}"]`);

    if (state) {
      contactName.classList.add('online');
    } else {
      contactName.classList.remove('online');
    }
  }
}

const contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(c => c.render('main'));

setTimeout(() => contacts[1].online = true, 2000);