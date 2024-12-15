function solveCurTask(arr) {
  const heroes = [];

  for (const data of arr) {
    const [name, level, items] = data.split(' / ');

    if (!name) {
      continue;
    }

    const itemsCheck = items ? items.split(', ') : [];

    const hero = {
      name,
      level: Number(level),
      items: itemsCheck
    };

    heroes.push(hero);
  }

  return JSON.stringify(heroes);
}

console.log(solveCurTask([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
]));