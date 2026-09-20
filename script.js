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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
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

function check_gamestate(humanScore, computerScore) {
    if (humanScore == 5) {
        console.log("HUMAN WINS WINS THE GAME")
        return false
    } else if (computerScore == 5){
        console.log("COMPUTER WINS THE GAME")
        return false
    }
}

let humanScore = 0
let computerScore = 0
let gameState = true
let humanChoice
let computerChoice
const rock_button = document.getElementById("rock")
const paper_button = document.getElementById("paper")
const scissors_button = document.getElementById("scissors")
rock_button.addEventListener("click", handle_click)
paper_button.addEventListener("click", handle_click)
scissors_button.addEventListener("click", handle_click)

function handle_click(event) {
    const human_choice = event.target.textContent
    playRound(human_choice, getComputerChoice())
    if (check_gamestate(humanScore, computerScore) == false) {
        humanScore = 0
        computerScore = 0
    }
}