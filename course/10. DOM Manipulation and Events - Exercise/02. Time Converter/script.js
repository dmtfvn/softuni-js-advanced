function attachEventsListeners() {
  const inputElDays = document.querySelector('#days');
  const inputElHours = document.querySelector('#hours');
  const inputElMinutes = document.querySelector('#minutes');
  const inputElSeconds = document.querySelector('#seconds');

  const convertBtns = document.querySelectorAll('[type="button"]');

  const timeUnits = {
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1
  };

  function updateTimeUnits(totalSeconds) {
    inputElDays.value = Number(totalSeconds / timeUnits.days).toFixed(2);
    inputElHours.value = Number(totalSeconds / timeUnits.hours).toFixed(2);
    inputElMinutes.value = Number(totalSeconds / timeUnits.minutes).toFixed(2);
    inputElSeconds.value = Number(totalSeconds / timeUnits.seconds).toFixed(2);
  }

  function clickEventHandler(e) {
    const inputTimeType = e.target.getAttribute('id').split('Btn')[0];

    const curInputEl = document.querySelector(`#${inputTimeType}`);

    const multiplier = timeUnits[inputTimeType];

    updateTimeUnits(curInputEl.value * multiplier);
  }

  convertBtns.forEach(btn => {
    btn.addEventListener('click', clickEventHandler);
  });
}