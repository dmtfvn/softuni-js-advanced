function encodeAndDecodeMessages() {
  const [encodeEl, decodeEl] = document.querySelectorAll('textarea');
  const [encodeBtn, decodeBtn] = document.querySelectorAll('button');

  encodeBtn.addEventListener('click', () => {
    const encodeData =
      encodeEl.value
        .split('')
        .map(ch => String.fromCharCode(ch.charCodeAt() + 1))
        .join('')
      ;

    decodeEl.value = encodeData;
    encodeEl.value = '';
  });

  decodeBtn.addEventListener('click', () => {
    const decodeData =
      decodeEl.value
        .split('')
        .map(ch => String.fromCharCode(ch.charCodeAt() - 1))
        .join('')
      ;

    decodeEl.value = decodeData;
  });
}