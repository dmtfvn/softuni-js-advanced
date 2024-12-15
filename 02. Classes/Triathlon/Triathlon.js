class Triathlon {
  competitionName;

  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = {};
  }

  addParticipant(participantName, participantGender) {
    if (this.participants.hasOwnProperty(participantName)) {
      return `${participantName} has already been added to the list`;
    } else {
      this.participants[participantName] = participantGender;

      return `A new participant has been added - ${participantName}`;
    }
  }

  completeness(participantName, condition) {
    if (!this.participants.hasOwnProperty(participantName)) {
      throw new Error(`${participantName} is not in the current participants list`);
    }

    if (condition < 30) {
      throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
    }

    const participantResult = Math.floor(condition / 30);

    if (participantResult >= 3) {
      this.listOfFinalists[participantName] = this.participants[participantName];

      return `Congratulations, ${participantName} finished the whole competition`;
    } else {
      return `${participantName} could only complete ${participantResult} of the disciplines`;
    }
  }

  rewarding(participantName) {
    if (!this.listOfFinalists.hasOwnProperty(participantName)) {
      return `${participantName} is not in the current finalists list`;
    }

    return `${participantName} was rewarded with a trophy for his performance`;
  }

  showRecord(criteria) {
    const record = Object.entries(this.listOfFinalists);

    if (record.length === 0) {
      return 'There are no finalists in this competition';
    }

    const allFinalist = [];

    if (criteria === 'male') {
      for (const [name, gender] of record) {
        if (gender === 'male') {
          return `${name} is the first ${gender} that finished the ${this.competitionName} triathlon`;
        }
      }
    } else if (criteria === 'female') {
      for (const [name, gender] of record) {
        if (gender === 'female') {
          return `${name} is the first ${gender} that finished the ${this.competitionName} triathlon`;
        }
      }
    } else if (criteria === 'all') {
      for (const curParticipant in this.listOfFinalists) {
        allFinalist.push(curParticipant);
      }

      allFinalist.sort((a, b) => a.localeCompare(b)).unshift(`List of all ${this.competitionName} finalists:`);

      return allFinalist.join('\n');
    } else {
      return `There are no ${criteria}'s that finished the competition`;
    }
  }
}

const contest = new Triathlon("Dynamos");

console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));