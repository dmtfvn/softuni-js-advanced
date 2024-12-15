class JobOffers {
  employer;
  possition;

  constructor(employer, possition) {
    this.employer = employer;
    this.possition = possition;
    this.jobCandidates = {};
  }

  jobApplication(candidates) {
    for (const person of candidates) {
      const [name, education, yearsExp] = person.split('-');

      if (name in this.jobCandidates) {
        if (this.jobCandidates[name].yearsExp < yearsExp) {
          this.jobCandidates[name].yearsExp = yearsExp;
        }
      } else {
        this.jobCandidates[name] = {};

        this.jobCandidates[name].name = name;
        this.jobCandidates[name].education = (`${education} degree`).trim();
        this.jobCandidates[name].yearsExp = Number(yearsExp);
      }
    }

    const names = [];

    for (const person in this.jobCandidates) {
      names.push(person);
    }

    return `You successfully added candidates: ${names.join(', ')}.`;
  }

  jobOffer(chosenPerson) {
    const [name, minExp] = chosenPerson.split('-');

    if (name in this.jobCandidates) {
      if (this.jobCandidates[name].yearsExp < Number(minExp)) {
        throw new Error(`${name} does not have enough experience as ${this.possition}, minimum requirement is ${minExp} years.`);
      }

      this.jobCandidates[name].yearsExp = 'hired';

      return `Welcome aboard, our newest employee is ${name}.`;
    } else {
      throw new Error(`${name} is not in the candidates list!`);
    }
  }

  salaryBonus(name) {
    if (name in this.jobCandidates) {
      if (this.jobCandidates[name].education === 'Bachelor degree') {
        return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $50,000 per year!`;
      } else if (this.jobCandidates[name].education === 'Master degree') {
        return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $60,000 per year!`;
      } else {
        return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $40,000 per year!`;
      }
    } else {
      throw new Error(`${name} is not in the candidates list!`);
    }
  }

  candidatesDatabase() {
    const dataBase = Object.values(this.jobCandidates);

    if (dataBase.length === 0) {
      throw new Error('Candidate Database is empty!');
    }

    const candidatesArr = ['Candidates list:'];

    dataBase.sort((a, b) => a.name.localeCompare(b.name)).forEach(p => candidatesArr.push(`${p.name}-${p.yearsExp}`));

    return candidatesArr.join('\n');
  }
}

const Jobs = new JobOffers("Google", "Strategy Analyst");

console.log(Jobs.jobApplication([
  "John Doe-Bachelor-10",
  "Peter Parker-Master-5",
  "Jordan Cole-High School-5",
  "Daniel Jones- Bachelor-18"
]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());