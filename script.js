let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, generateTarget) => {
    if (Math.abs(userGuess - generateTarget) > Math.abs(computerGuess - generateTarget)) {
        return false;
    } else {
        return true;
    }
};

const updateScore = (winner) => {  
    if (winner === 'human') {
        humanScore++;      
    } else {
        computerScore++;       
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};

