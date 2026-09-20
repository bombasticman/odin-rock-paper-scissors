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
    switch(prompt("Please input your choice. 0 = rock 1 = paper 2 = scissors")){
        case "0":
            choice = "rock"
            break
        case "1":
            choice = "paper"
            break
        case "2":
            choice = "scissors"
            break
        default:
            choice = "Please input the numbers indicated on the prompt"
            break
    }
    return choice
}

const computerChoice = getComputerChoice()
const humanChoice = getHumanChoice()
console.log(computerChoice)
console.log(humanChoice)