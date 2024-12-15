function solveCurTask() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `Person (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);

      this.course = course;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);

      this.subject = subject;
    }
  }

  Object.getPrototypeOf(new Person());

  Student.prototype.toString = function () {
    return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
  }

  Teacher.prototype.toString = function () {
    return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
  }

  return {
    Person,
    Student,
    Teacher
  }
}