function extractText() {
  const input = document.getElementById('items');
  const textField = document.getElementById('result');

  const result = [];

  for (const el of input.children) {
    result.push(el.textContent);
  }

  textField.textContent = result.join('\n');
}