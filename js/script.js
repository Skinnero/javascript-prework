function playGame(playerInput) {
    clearMessages()
    function getMoveName(number) {
        switch (parseInt(number)) {
            case 1:
                return 'kamień'
            case 2:
                return 'papier'
            case 3:
                return 'nożyce'
        }
        return 'nieznany ruch'
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if (argComputerMove === 'nieznany ruch' || argPlayerMove === 'nieznany ruch') {
            printMessage('Błędnie wybrany ruch!')
        } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
            printMessage('Ty wygrywasz!')
        } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
            printMessage('Ty wygrywasz!')
        } else if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
            printMessage('Ty wygrywasz!')
        } else if (argComputerMove === argPlayerMove) {
            printMessage('Remis!')
        } else {
            printMessage('Przegrywasz!')
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1)

    let computerMove = getMoveName(randomNumber)

    printMessage("Mój ruch to: " + computerMove)

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove)
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1)
})
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2)
})
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3)
})