var tieCount = 0;
var winCount = 0;
var lossCount = 0;
var rpsComputer = ["R", "P", "S"];
var playAgain = true;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

alert("Welcome to Rock, Paper, Scissors");

while(playAgain) {
    var rpsUser = prompt("Please choose R, P, or S");

    // If user cancels, game is ended
    if(!rpsUser) {
        playAgain = false;
    }

    // Standardizes user's input to uppercase
    rpsUser = rpsUser.toUpperCase();
    // Computer's choice is made
    var computerChoice = rpsComputer[getRandomInt(3)];

    // Checks to see if user chose R, P, or S
    if(rpsUser === "R" || rpsUser === "P" || rpsUser === "S") {


        // Checks to see who won
        if(rpsUser === computerChoice) {
            alert("The computer chose " + computerChoice + ". You tied!");
            tieCount++;
        } else if ((rpsUser === "R" && computerChoice === "S") 
                || (rpsUser === "P" && computerChoice === "R") 
                || (rpsUser === "S" && computerChoice === "P")) {
            alert("The computer chose " + computerChoice + ". You won!");
             winCount++;  
        } else {
            alert("The computer chose " + computerChoice + ". You lost!");
            lossCount++;           
        }

        // Stats are displayed and user is prompted to play again
        var stats = "Stats: \n Wins: " + winCount + "\n Losses: " + lossCount + "\n Ties: " + tieCount;
        alert(stats);
        playAgain = confirm("Do you wish to play again?");
        
    } else {
        
        // If user did not choose an R, P, or S, they are brought here
        alert("PLEASE ONLY CHOOSE R, P, OR S");
        playAgain = confirm("Do you wish to try again?");
    }   
}

alert("Thanks for playing!");