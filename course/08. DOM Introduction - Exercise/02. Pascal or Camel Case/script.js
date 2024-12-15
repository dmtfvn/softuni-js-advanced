function solve() {
  const input = document.querySelector('#text').value.trim();
  const convention = document.querySelector('#naming-convention').value;

  const resultEl = document.querySelector('#result');

  if (input === '' || convention === '') {
    return;
  }

  let result = '';

  const sentence = input.split(' ');

  if (convention === 'Camel Case') {
    const [firstWord, ...otherWords] = sentence;

    const camelCase =
      firstWord.split('')
        .map(char => char.toLowerCase()).join('') +
      otherWords
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('')
      ;

    result = camelCase;
  } else if (convention === 'Pascal Case') {
    const pascalCase =
      sentence.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');

    result = pascalCase;
  } else {
    result = 'Error!';
  }

  resultEl.textContent = result;
}