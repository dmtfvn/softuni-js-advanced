function solveCurTask(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth(percent) {
      this.population += Math.floor((percent / 100) * this.population);
    },
    applyRecession(percent) {
      this.treasury -= Math.ceil((percent / 100) * this.treasury);
    }
  };

  return city;
}

const result = solveCurTask('Tortuga', 7000, 15000);
console.log(result);

result.collectTaxes();
console.log(result);

result.applyGrowth(5);
console.log(result);

result.applyRecession(7);
console.log(result);