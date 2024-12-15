function extract() {
  const text = document.getElementById('content').textContent;

  const regEx = /\((.+?)\)/gm;

  const result = [];

  let match = regEx.exec(text);

  while (match !== null) {
    result.push(match[1]);

    match = regEx.exec(text);
  }

  const print = result.join(', ');
  console.log(print)

  return print;
}