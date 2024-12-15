class Company {
  constructor() {
    this.sections = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !position || !department || salary <= 0) {
      throw new Error('Invalid input!');
    }

    const newEmployee = {};

    newEmployee.name = name;
    newEmployee.salary = salary;
    newEmployee.position = position;

    if (!this.sections.hasOwnProperty(department)) {
      this.sections[department] = [];
    }

    this.sections[department].push(newEmployee);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const depArr = Object.entries(this.sections);

    let bestDep = '';
    let avgSalary = 0;

    for (const curDep of depArr) {
      const [dep, employees] = curDep;

      const maxAvgSalary = employees.reduce((acc, obj) => acc + obj.salary, 0) / employees.length;
      employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

      if (avgSalary < maxAvgSalary) {
        bestDep = dep;
        avgSalary = maxAvgSalary;
      }
    }

    const depEmployees = [];

    this.sections[bestDep].forEach(obj => depEmployees.push(`${obj.name} ${obj.salary} ${obj.position}`));

    let result = '';

    result += `Best Department is: ${bestDep}\n`
    result += `Average salary: ${avgSalary.toFixed(2)}\n`;
    result += `${depEmployees.join('\n')}`;

    return result.trim();
  }
}

const c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());