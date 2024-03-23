//Rock Paper Scissors
//Declare variables for game play:
// create variable for player and computer choices
//Crate variables for score tracking
//Prompt user for "user choice"
  //Convert user string to lowercase
   //Take converted string and assign value
//Get computer choice
//Take user choice and compare against computer choice
//return results of game

//Declare variable for Rock, Paper, Scissors
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

//Declare variables for choices
let playerChoice
let computerChoice

//Variables for tracking scores and rounds
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let scoreCard = " "

//Function to update score card dynamically
function updateScoreCard(){
    scoreCard = "Round: " + roundsPlayed + " Player: " + playerScore + " Computer: " + computerScore + " Tie: " + draws;
}

//function to prompt for players choice
function getPlayerChoice(){
    let choose = prompt("Choose: 'Rock',Paper','Scissors");
    if (choose.toLowerCase() === "rock"){
            playerChoice = rock
        }
        else if (choose.toLowerCase() === "paper"){
            playerChoice = paper
        }
        else if (choose.toLowerCase() === "scissors"){
        playerChoice = scissors}
        else{ alert("Invalid. Please try again.")// Handles invalid user input and re-prompts
        getPlayerChoice();
        }
}

//function to generate computers choice
function getComputerChoice(){
    var randomNumber = Math.floor (Math.random() *3)
    if (randomNumber === 0 ){
    computerChoice = rock;
}
    else if (randomNumber === 1 ){
    computerChoice = paper;
}
    else { 
    computerChoice = scissors;
    }
}
//function to compare the results and declare winner
function declareWinner(){
    if (playerChoice && computerChoice){
        console.log("Player: " + playerChoice);
        console.log("Computer: " + computerChoice);
        roundsPlayed++;
        
    }
    if (playerChoice === computerChoice){
        draws++;
        updateScoreCard();
    console.log("It's a tie")
    console.log(scoreCard)
}
else if(
    (playerChoice === rock  && computerChoice === scissors) ||
    (playerChoice === paper && computerChoice === rock) ||
    (playerChoice === scissors && computerChoice === paper)
    ){
        playerScore++;
        updateScoreCard();
        console.log("You win!")
        console.log(scoreCard)
    }
    else {
        computerScore++;
        updateScoreCard();
        console.log("Computer Wins!")
        console.log(scoreCard)
    }
}
//function to play again
function playAgain (){
    var anotherRound = (confirm ("Would you like to play another round?"))
        if (anotherRound === true){
            getPlayerChoice();
            getComputerChoice();
            declareWinner();
            playAgain();
        }
        else{
            console.log("Goodbye")
        }
    }
//run the game
getPlayerChoice();
getComputerChoice();
declareWinner();
playAgain();