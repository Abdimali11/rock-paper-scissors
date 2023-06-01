// Good Luck! You got this 💪🏾
// Write your code here.
function playGame(pl1,pl2) { 
    if (pl1 === pl2) { 
    return "tie"; } 
    else if ( (pl1 === "rock" && pl2 === "scissors") || (pl1 === "paper" && pl2 === "rock") || (pl1 === "scissors" && pl2 === "paper") )
     { return "pl1 wins"; } 
    else { return "pl2 wins"; } } 
    console.log(playGame("rock", "paper"))
    console.log(playGame("scissors", "scissors"))