function solve() {
  const input = document.querySelector('#input').value;
  const outputEl = document.querySelector('#output');

  if (input === '') {
    return;
  }

  const sentences = input.split('. ');

  const paragraphCount = Math.ceil(sentences.length / 3);

  let textBlock = '';

  for (let i = 0; i < paragraphCount; i++) {
    const p = i * paragraphCount;

    const text = sentences.slice(p, (p + paragraphCount));
    textBlock = `<p>${text.join('. ')}</p>`;

    outputEl.innerHTML += textBlock;
  }
}