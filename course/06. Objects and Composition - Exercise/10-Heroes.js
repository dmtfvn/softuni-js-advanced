function solveCurTask() {
  const canFight = (state) => ({
    fight: () => {
      console.log(`${state.name} slashes at the foe!`);
      state.stamina--;
    }
  });

  const fighter = (name) => {
    const state = {
      name,
      health: 100,
      stamina: 100
    }

    return Object.assign(state, canFight(state));
  }

  const canCast = (state) => ({
    cast: (spell) => {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    }
  });

  const mage = (name) => {
    const state = {
      name,
      health: 100,
      mana: 100
    }

    return Object.assign(state, canCast(state));
  }

  return { fighter: fighter, mage: mage };
}

const create = solveCurTask();

const sorcerer = create.mage("Scorcher");
sorcerer.cast("fireball");
sorcerer.cast("thunder");
sorcerer.cast("light");

const brawler = create.fighter("Scorcher 2");
brawler.fight();

console.log(brawler.stamina);
console.log(sorcerer.mana);