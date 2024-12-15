class SmartHike {
  username;

  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = {};
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (peak in this.goals) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = {};

      this.goals[peak].peak = peak;
      this.goals[peak].altitude = altitude;

      return `You have successfully added a new goal - ${peak}`;
    }
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.resources === 0) {
      return 'You don\'t have enough resources to start the hike';
    }

    const difference = this.resources - time * 10;
    this.resources = difference;

    if (difference < 0) {
      return 'You don\'t have enough resources to complete the hike';
    }

    this.listOfHikes[peak] = {};

    this.listOfHikes[peak].peak = peak;
    this.listOfHikes[peak].time = time;
    this.listOfHikes[peak].difficultyLevel = difficultyLevel;

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;

    if (this.resources >= 100) {
      this.resources = 100;

      return 'Your resources are fully recharged. Time for hiking!';
    } else {
      return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }
  }

  showRecord(criteria) {
    const arrOfHikes = Object.values(this.listOfHikes);

    if (arrOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria === 'hard') {
      const hardHikesTime = [];

      for (const hike of arrOfHikes) {
        if (hike.difficultyLevel === criteria) {
          hardHikesTime.push(hike.time);
        }
      }

      if (hardHikesTime.length === 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      const bestHike = Math.min(hardHikesTime);

      for (const curHike of arrOfHikes) {
        if (curHike.time === bestHike) {
          return `${this.username}'s best ${criteria} hike is ${curHike.peak} peak, for ${curHike.time} hours`;
        }
      }
    }

    if (criteria === 'easy') {
      const easyHikesTime = [];

      for (const hike of arrOfHikes) {
        if (hike.difficultyLevel === criteria) {
          easyHikesTime.push(hike.time);
        }
      }

      if (easyHikesTime.length === 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      const bestHike = Math.min(easyHikesTime);

      for (const curHike of arrOfHikes) {
        if (curHike.time === bestHike) {
          return `${this.username}'s best ${criteria} hike is ${curHike.peak} peak, for ${curHike.time} hours`;
        }
      }
    }

    if (criteria === 'all') {
      const finalResult = ['All hiking records:'];

      arrOfHikes.forEach(h => {
        finalResult.push(`${this.username} hiked ${h.peak} for ${h.time} hours`);
      });

      return finalResult.join('\n');
    }
  }
}

const user = new SmartHike('Vili');

user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));

user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));

user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));