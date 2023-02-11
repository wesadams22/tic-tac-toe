// Game State
const state = {
    players: ["X", "O"],
    currentPlayer: "X",
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
};

// DOM Selectors
const gameBoard = document.getElementsByClassName('square');
const playerName = document.getElementById("player-turn");
const submitButton = document.getElementById("sub-button")
const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");
const labels = document.getElementsByClassName("label")

// Set Up
const initializeGame = () => {
    for (let i=0; i < gameBoard.length; i++) {
        gameBoard[i].addEventListener('click', displayLetter);
    }

}

// Name Input functions 


const submitNames = () =>{
    const playerOne = document.getElementById("player-one");
    const playerTwo = document.getElementById("player-two");
    firstPlayer = playerOne.innerText
    secondPlayer = playerTwo.innerText
    playerOne.style.display = 'none';
    playerTwo.style.display = 'none';
    labels.style.display = 'none'
    submitButton.style.display = 'none';
    console.log(firstPlayer);
    console.log(secondPlayer);
}

submitButton.addEventListener('click', submitNames)

const displayPlayerName = () => {
    if (state.currentPlayer === "X") {
        playerName.innerText = playerOne
    } else if (state.currentPlayer === "O") {
        playerName.innerText = playerTwo
    }
}

// Helper Functions
const displayLetter = (event) => {

    const chosenSquare = event.target;
    if (!chosenSquare.innerText) {
        chosenSquare.innerText = state.currentPlayer;
        state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
        updateBoard(event)
        checkForWin()
    }
    
    
}

// Update Board 

const updateBoard = (event) => {
    chosenSquare = event.target;
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i] === chosenSquare) {
            state.board[0][i] = chosenSquare.innerText
        }
    }
    for (let i = 3; i < 6; i++) {
        if (gameBoard[i] === chosenSquare) {
            state.board[1][i - 3] = chosenSquare.innerText
        }
    }
    for (let i = 6; i < 9; i++) {
        if (gameBoard[i] === chosenSquare) {
            state.board[2][i - 6] = chosenSquare.innerText
        }
    }
}



// Win Conditions
const checkForWin = () => {
    // Rows
    if (state.board[0][0] !== null && 
        state.board[0][0] === state.board[0][1] &&
        state.board[0][0] === state.board[0][2]) {
            window.alert("That's a WIN!!");
        };
    if (state.board[1][0] !== null && 
        state.board[1][0] === state.board[1][1] &&
        state.board[1][0] === state.board[1][2]) {
            window.alert("That's a WIN!!");
        }

    if (state.board[2][0] !== null && 
        state.board[2][0] === state.board[2][1] &&
        state.board[2][0] === state.board[2][2]) {
            window.alert("That's a WIN!!");
        }
    // Columns
    if (state.board[0][0] !== null && 
        state.board[0][0] === state.board[1][0] &&
        state.board[0][0] === state.board[2][0]) {
            window.alert("That's a WIN!!");
        };
    if (state.board[0][1] !== null && 
        state.board[0][1] === state.board[1][1] &&
        state.board[0][1] === state.board[2][1]) {
            window.alert("That's a WIN!!");
        }

    if (state.board[0][2] !== null && 
        state.board[0][2] === state.board[1][2] &&
        state.board[0][2] === state.board[2][2])  {
            window.alert("That's a WIN!!");
        }
    // Diagonal 
    if (state.board[0][0] !== null &&
        state.board[0][0] === state.board[1][1] &&
        state.board[0][0] === state.board[2][2]) {
            window.alert("That's a WIN!!")
        }

    if (state.board[0][2] !== null &&
        state.board[0][2] === state.board[1][1] &&
        state.board[0][2] === state.board[2][0]) {
            window.alert("That's a WIN!!")
        }
}

// Reset Game (without refreshing page)
const reset = () => {
    document.location.reload()
}
// LASTLY set up CPU opponent
// have cpu pic anything (easiest)
// drop down for single/multiplayer


initializeGame();


// submit names to display names (no longer input boxes)
// hide submit button after names submitted
// NO POP UPS for win condition, should be displayed below with winner's name
// clear board and retset text entry box with submit buttons




