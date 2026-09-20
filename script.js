function getComputerChoice() {
    let choice
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            choice = "rock"
            break
        case 1:
            choice = "paper"
            break
        case 2:
            choice = "scissors"
            break
    }
    return choice
}

function getHumanChoice() {
    let choice
    switch(prompt("Please input your choice.").toLowerCase()){
        case "rock":
            choice = "rock"
            break
        case "paper":
            choice = "paper"
            break
        case "scissors":
            choice = "scissors"
            break
        default:
            choice = "Please input the numbers indicated on the prompt"
            break
    }
    return choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("DRAW!")
    }
    switch(humanChoice) {
        case "rock":
            if (computerChoice == "paper"){
                console.log("COMPUTER WINS")
                computerScore = computerScore + 1
            } else {
                console.log("HUMAN WINS")
                humanScore = humanScore + 1
            }
            break
        case "paper":
            if (computerChoice == "scissors"){
                console.log("COMPUTER WINS")
                computerScore = computerScore + 1
            } else {
                console.log("HUMAN WINS")
                humanScore = humanScore + 1
            }
            break
        case "scissors":
            if (computerChoice == "rock"){
                console.log("COMPUTER WINS")
                computerScore = computerScore + 1
            } else {
                console.log("HUMAN WINS")
                humanScore = humanScore + 1
            }
            break
    }
    console.log("HUMAN" + "----" + "COMPUTER")
    console.log(humanScore + "----" + computerScore)
}
let humanScore = 0
let computerScore = 0
let gameState = true
while(gameState) {
    let computerChoice = "paper"
    let humanChoice = getHumanChoice()
    playRound(humanChoice, computerChoice)
    if(humanScore == 5 || computerScore == 5){
        if (humanScore > computerScore){
          console.log("HUMAN WINS THE GAME");
        } else if (humanScore < computerScore){
        console.log("COMPUTER WINS THE GAME");
        }
        gameState = false
    }
}