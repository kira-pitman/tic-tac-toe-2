console.log('Welcome to Tic-Tac-Toe! Enjoy!')

// an array containing all the squares of the board
// the ability to click each square and put either an X or an O into it
// a boolean to keep track of whose turn it is, X or O, and logic to switch turns once a player makes a move
// logic to display whose turn it is
// a function that checks if the game has been won
// logic to display "_ WON!" when a player wins.

let cells = document.getElementsByTagName('TD')
let noughtsTurn = true // start with noughts
let gameisover // game will be over when winning conditions met

function cellClicked(e) {
  let cell = e.target
  console.log('clicked')
}

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}
