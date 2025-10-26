let randomNumber = Math.floor(Math.random() * 3 + 1)

console.log('Wylosowana liczba to: ' + randomNumber)

let computerMove = 'nieznany ruch'

switch (randomNumber) {
    case 1:
        computerMove = 'kamień'
        break
    case 2:
        computerMove = 'papier'
        break
    case 3:
        computerMove = 'nożyce'
}

printMessage("Mój ruch to: " + computerMove)

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

switch (playerInput) {
    case '1':
        playerMove = 'kamień'
        break
    case '2':
        playerMove = 'papier'
        break
    case '3':
        playerMove = 'nożyce'
}

printMessage('Twój ruch to: ' + playerMove);
