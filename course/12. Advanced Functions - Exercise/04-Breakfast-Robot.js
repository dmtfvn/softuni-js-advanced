function solveCurTask() {
  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  };

  const recipes = {
    'apple': { carbohydrate: 1, flavour: 2 },
    'lemonade': { carbohydrate: 10, flavour: 20 },
    'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
    'eggs': { protein: 5, fat: 1, flavour: 1 },
    'turkey': { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  }

  function prepareMeal(str) {
    const [action, item, qty] = str.split(' ');

    const commands = {
      restock(micro, qty) {
        ingredients[micro] += qty;

        return 'Success';
      },
      prepare(food, qty) {
        const recipe = Object.entries(recipes[food]);

        for (const [el, count] of recipe) {
          if (ingredients[el] < count * qty) {
            return `Error: not enough ${el} in stock`;
          }
        }

        recipe.forEach(item => {
          const [el, count] = item;

          ingredients[el] -= count * qty;
        });

        return 'Success';
      },
      report() {
        return Object.entries(ingredients).map(([el, count]) => `${el}=${count}`).join(' ');
      }
    };

    return commands[action](item, +qty);
  }

  return prepareMeal;
}

const manager = solveCurTask();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));