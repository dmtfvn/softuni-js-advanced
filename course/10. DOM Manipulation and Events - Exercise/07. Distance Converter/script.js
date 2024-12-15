function attachEventsListeners() {
  const inputDistanceEl = document.querySelector('#inputDistance');
  const inputUnitsEl = document.querySelector('#inputUnits');

  const outputDistanceEl = document.querySelector('#outputDistance');
  const outputUnitsEl = document.querySelector('#outputUnits');

  const convertBtn = document.querySelector('#convert');

  const units = {
    km: 1000000,
    m: 1000,
    cm: 10,
    mm: 1,
    mi: 1609344,
    yrd: 914.4,
    ft: 304.8,
    in: 25.4
  };

  convertBtn.addEventListener('click', () => {
    const inputAmount = Number(inputDistanceEl.value);

    const inputUnits = inputUnitsEl.value;
    const outputUnits = outputUnitsEl.value;

    outputDistanceEl.value = Number(inputAmount * units[inputUnits] / units[outputUnits]);
  });
}