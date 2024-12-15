function generateReport() {
  const outputEl = document.querySelector('#output');
  const tHeadRow = document.querySelector('table thead tr');
  const tBodyRows = document.querySelectorAll('table tbody tr');

  const checkedInputEls =
    [...tHeadRow.children]
      .map((item, i) => ({
        el: item.children[0],
        name: item.children[0].getAttribute('name'),
        index: i
      }))
      .filter(item => item.el.checked)
    ;

  const employeeData = [...tBodyRows].map(col => {
    return checkedInputEls.reduce((obj, el) => {
      obj[el.name] = col.children[el.index].textContent;

      return obj;
    }, {});
  })

  outputEl.value = JSON.stringify(employeeData);
}