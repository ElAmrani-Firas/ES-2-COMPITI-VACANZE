var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';

function makeMove(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      alert(currentPlayer + ' ha vinto!');
      resetGame();
    } else if (checkDraw()) {
      alert('Partita terminata in pareggio!');
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // orizzontali
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticali
    [0, 4, 8], [2, 4, 6] // diagonali
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return !board.includes('');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}
