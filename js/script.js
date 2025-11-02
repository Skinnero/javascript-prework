function playGame(playerInput) {

    const playRock = 'kamień'
    const playPaper = 'papier'
    const playScissors = 'nożyce'
    const invalidMove = 'nieznany ruch'
    const messageWin = 'Ty wygrywasz!'
    const messageWrongMove = 'Błędnie wybrany ruch!'
    const messageLose = 'Przegrywasz!'
    const messageDraw = 'Remis!'
    
    clearMessages()

    let getMoveName = function (number) {
        switch (parseInt(number)) {
            case 1:
                return playRock
            case 2:
                return playPaper
            case 3:
                return playScissors
        }
        return invalidMove
    }

    let displayResult = function (argComputerMove, argPlayerMove) {
        if (argComputerMove === invalidMove || argPlayerMove === invalidMove) {
            printMessage(messageWrongMove)
        } else if (argComputerMove === playPaper && argPlayerMove === playScissors) {
            printMessage(messageWin)
        } else if (argComputerMove === playScissors && argPlayerMove === playRock) {
            printMessage(messageWin)
        } else if (argComputerMove === playRock && argPlayerMove === playPaper) {
            printMessage(messageWin)
        } else if (argComputerMove === argPlayerMove) {
            printMessage(messageDraw)
        } else {
            printMessage(messageLose)
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1)

    let computerMove = getMoveName(randomNumber)

    printMessage("Mój ruch to: " + computerMove)

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove)
}

let rockButton = document.getElementById('play-rock')
let paperButton = document.getElementById('play-paper')
let scissorsButton = document.getElementById('play-scissors')

rockButton.addEventListener('click', function () {
    playGame(1)
})

paperButton.addEventListener('click', function () {
    playGame(2)
})

scissorsButton.addEventListener('click', function () {
    playGame(3)
})