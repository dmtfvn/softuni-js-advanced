function solveCurTask(input) {
  let dayOfWeek;

  switch (input) {
    case 'Monday':
      dayOfWeek = 1;
      break;
    case 'Tuesday':
      dayOfWeek = 2;
      break;
    case 'Wednesday':
      dayOfWeek = 3;
      break;
    case 'Thursday':
      dayOfWeek = 4;
      break;
    case 'Friday':
      dayOfWeek = 5;
      break;
    case 'Saturday':
      dayOfWeek = 6;
      break;
    case 'Sunday':
      dayOfWeek = 7;
      break;
    default:
      console.log('error');
      return;
  }

  console.log(dayOfWeek);
}

solveCurTask('Monday');