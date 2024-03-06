console.log('Welcome to Tic-Tac-Toe! Enjoy!')

// an array containing all the squares of the board
// the ability to click each square and put either an X or an O into it
// a boolean to keep track of whose turn it is, X or O, and logic to switch turns once a player makes a move
// logic to display whose turn it is
// a function that checks if the game has been won
// logic to display "_ WON!" when a player wins.

let cells = document.getElementsByTagName('TD')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

let noughtsTurn = true // start with noughts
let gameIsOver // game will be over when winning conditions met

function checkForWin(symbol) {
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // VERTICAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // DIAGONAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true

  if (gameIsOver) {
    subtitle.innerHTML = `Congratulations ${symbol}, you won the game!`
  }
}

function cellClicked(e) {
  let cells = e.target

  if (cells.innerHTML == '' && noughtsTurn) {
    cells.innerHTML = 'O'
  }
  checkForWin('O')

  if (!gameIsOver) {
    noughtsTurn = !noughtsTurn
    subtitle.innerHTML = 'Your turn X'
  }

  if (cells.innerHTML == '') {
    cells.innerHTML = 'X'
    subtitle.innerHTML = 'Your turn O'
    checkForWin('X')
  }
}
