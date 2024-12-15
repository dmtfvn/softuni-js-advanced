class footballTeam {
  clubName;
  country;

  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = {};
  }

  newAdditions(footballPlayers) {
    for (const curPlayer of footballPlayers) {
      const [name, age, value] = curPlayer.split('/');

      if (name in this.invitedPlayers) {
        if (this.invitedPlayers[name].playerValue < value) {
          this.invitedPlayers[name].playerValue = Number(value);
        }
      } else {
        this.invitedPlayers[name] = {};

        this.invitedPlayers[name].name = name;
        this.invitedPlayers[name].age = Number(age);
        this.invitedPlayers[name].playerValue = Number(value);
      }
    }

    const players = [];

    Object.values(this.invitedPlayers).forEach(p => players.push(p.name));

    return `You successfully invite ${players.join(', ')}.`;
  }

  signContract(selectedPlayer) {
    const [name, offer] = selectedPlayer.split('/');

    if (!this.invitedPlayers.hasOwnProperty(name)) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    const priceDifference = Math.abs(this.invitedPlayers[name].playerValue - offer);

    if (offer < this.invitedPlayers[name].playerValue) {
      throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
    }

    this.invitedPlayers[name].playerValue = 'Bought';

    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }

  ageLimit(name, ageLimit) {
    if (!this.invitedPlayers.hasOwnProperty(name)) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (this.invitedPlayers[name].age < ageLimit) {
      const ageDifference = Math.abs(this.invitedPlayers[name].age - ageLimit);

      if (ageDifference < 5) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
      } else if (ageDifference > 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else {
      return `${name} is above age limit!`;
    }
  }

  transferWindowResult() {
    const allPlayers = ['Players list:'];

    for (const player in this.invitedPlayers) {
      allPlayers.push(`Player ${this.invitedPlayers[player].name}-${this.invitedPlayers[player].playerValue}`);
    }

    return allPlayers.join('\n');
  }
}

const fTeam = new footballTeam("Barcelona", "Spain");

console.log(fTeam.newAdditions([
  "Kylian Mbappé/23/160",
  "Lionel Messi/35/50",
  "Pau Torres/25/52"
]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());