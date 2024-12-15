function createPerson(firstName, lastName) {
  const result = {
    firstName,
    lastName
  };

  Object.defineProperty(result, 'fullName', {
    configurable: true,
    enumerable: true,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const [firstName, lastName] = value.split(' ');

      if (firstName && lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    }
  });

  return result;
}

const person = createPerson("Albert", "Simpson");
console.log(person.fullName);

person.firstName = "Simon";
console.log(person.fullName);

person.fullName = "Peter";
console.log(person.firstName);
console.log(person.lastName);