function solveCurTask(speed, location) {
  const speedLimitArea = {
    'motorway': 130,
    'interstate': 90,
    'city': 50,
    'residential': 20
  };

  for (const area in speedLimitArea) {
    const areaLimit = speedLimitArea[area];

    if (area === location) {
      if (speed > areaLimit) {
        const difference = speed - areaLimit;

        let status;

        if (speed - areaLimit <= 20) {
          status = 'speeding';
        } else if (speed - areaLimit <= 40) {
          status = 'excessive speeding';
        } else {
          status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaLimit} - ${status}`);
      } else {
        console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
      }
    }
  }
}

solveCurTask(200, 'motorway');