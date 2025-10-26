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