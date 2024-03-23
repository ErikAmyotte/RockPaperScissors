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
        else alert("You suck")
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
    }
    if (playerChoice === computerChoice){
    console.log("It's a tie")}
else if(
    (playerChoice === rock  && computerChoice === scissors) ||
    (playerChoice === paper && computerChoice === rock) ||
    (playerChoice === scissors && computerChoice === paper)
    ){
        console.log("You win!")
    }
    else {console.log("Computer Wins!")}
}
//run the game
getPlayerChoice();
getComputerChoice();
declareWinner();