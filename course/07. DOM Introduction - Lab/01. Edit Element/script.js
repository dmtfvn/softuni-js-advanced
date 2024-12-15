function editElement(ref, match, replacement) {
  const regEx = new RegExp(match, 'g');

  ref.textContent = ref.textContent.replace(regEx, replacement);
}