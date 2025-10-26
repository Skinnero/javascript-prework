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

console.log('Wylosowana liczba to: ' + randomNumber)

let computerMove = getMoveName(randomNumber)

printMessage("Mój ruch to: " + computerMove)

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove)