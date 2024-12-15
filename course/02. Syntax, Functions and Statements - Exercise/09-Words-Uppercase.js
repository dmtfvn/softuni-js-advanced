function solveCurTask(input) {
  const cutter = /[^A-Za-z0-9]/gm;

  const str =
    input
      .split(cutter)
      .filter(el => el !== '')
      .join(', ')
      .toUpperCase()
    ;

  console.log(str);
}

solveCurTask('Hi, how are you?');