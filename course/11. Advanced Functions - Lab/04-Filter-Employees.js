function solveCurTask(data, criteria) {
  const employees = JSON.parse(data);
  const [type, value] = criteria.split('-');

  let position = 0;

  employees.forEach(obj => {
    if (type in obj) {
      if (obj[type] === value) {
        console.log(`${position}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);

        position++;
      }
    }

    if (type === 'all') {
      console.log(`${position}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);

      position++;
    }
  });
}

solveCurTask(
  `[
    {
      "id": "1",
      "first_name": "Ardine",
      "last_name": "Bassam",
      "email": "abassam0@cnn.com",
      "gender": "Female"
    },
    {
      "id": "2",
      "first_name": "Kizzee",
      "last_name": "Jost",
      "email": "kjost1@forbes.com",
      "gender": "Female"
    },
    {
      "id": "3",
      "first_name": "Evanne",
      "last_name": "Maldin",
      "email": "emaldin2@hostgator.com",
      "gender": "Male"
    }
  ]`,
  'gender-Female'
);