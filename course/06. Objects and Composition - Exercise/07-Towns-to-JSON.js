function solveCurTask(arr) {
  const separator = /(?:\s*\|\s*)/;

  const [colTown, colLat, colLon] =
    arr
      .shift()
      .split(separator)
      .filter(el => el !== '')
    ;

  const data =
    arr
      .map(el => el.split(separator).filter(el => el !== ''))
      .reduce((a, b) => {
        const [town, lat, lon] = b.map(el => (isNaN(el) ? el : Number(Number(el).toFixed(2))));

        const townData = {};

        townData[colTown] = town;
        townData[colLat] = lat;
        townData[colLon] = lon;

        a.push(townData);

        return a;
      }, []);

  console.log(JSON.stringify(data));
}

solveCurTask([
  '| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |'
]);