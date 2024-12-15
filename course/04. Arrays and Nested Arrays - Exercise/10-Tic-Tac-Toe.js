function solveCurTask(input) {
  let initialDashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  let isFirstPlayerTurn = true;

  for (const el of input) {
    const [x, y] = el.split(' ');

    if (initialDashboard[x][y]) {
      console.log('This place is already taken. Please choose another!');

      continue;
    }

    const marker = isFirstPlayerTurn ? 'X' : 'O';

    initialDashboard[x][y] = marker;

    if (checkForWinner(initialDashboard, marker)) {
      console.log(`Player ${marker} wins!`);

      return printDashboard(initialDashboard);
    }

    if (checkForFreeSpace(initialDashboard)) {
      console.log('The game ended! Nobody wins :(');

      return printDashboard(initialDashboard);
    }

    isFirstPlayerTurn = !isFirstPlayerTurn;
  }

  function printDashboard(dashboard) {
    dashboard.forEach(row => {
      console.log(row.join('\t'));
    });
  }

  function checkForFreeSpace(dashboard) {
    return !dashboard.flat().filter(el => !el).length;
  }

  function checkForWinner(board, mark) {
    if (board[0][0] === mark && board[1][1] === mark && board[2][2] === mark) {
      return true;
    } else if (board[0][2] === mark && board[1][1] === mark && board[2][0] === mark) {
      return true;
    }

    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === mark && board[i][1] === mark && board[i][2] === mark) {
        return true;
      } else if (board[0][i] === mark && board[1][i] === mark && board[2][i] === mark) {
        return true;
      }
    }

    return false;
  }
}

solveCurTask([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0"
]);