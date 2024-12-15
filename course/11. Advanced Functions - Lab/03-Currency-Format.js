function solveCurTask(a, b, c, func) {
  return func.bind(null, a, b, c)
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);

  if (symbolFirst) {
    return symbol + ' ' + result;
  } else {
    return result + ' ' + symbol;
  }
}

const dollarFormatter = solveCurTask(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));