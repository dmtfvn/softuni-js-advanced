function solveCurTask(steps, footprint, speed) {
  const totalDistance = steps * footprint;
  const walkingSpeed = speed / 3.6;

  const totatTime = totalDistance / walkingSpeed;
  const rest = Math.floor(totalDistance / 500);

  const seconds = totatTime % 60;

  let mins = Math.floor(totatTime / 60);
  mins += rest;

  const hours = Math.floor(mins / 60);
  mins %= 60;

  const formatHour = hours < 10 ? `0${hours}` : `${hours}`;
  const formatMin = mins < 10 ? `0${mins}` : `${mins}`;
  const formatSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

  console.log(`${formatHour}:${formatMin}:${Math.round(formatSec)}`);
}

solveCurTask(4000, 0.60, 5);