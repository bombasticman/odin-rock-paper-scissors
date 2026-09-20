function getComputerChoice() {
    let result
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            result = "rock"
            break
        case 1:
            result = "paper"
            break
        case 2:
            result = "scissors"
            break
    }
    return result
}
choice = getComputerChoice()
console.log(choice)
