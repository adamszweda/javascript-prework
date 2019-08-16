function getMoveName(argMoveId){    
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2) {
      return 'papier';
    } else if(argMoveId == 3) {
      return 'nożyce';
    } else if(argMoveId == '') {
        return 'nic nie wybrałeś'
    }
  
    printMessage('Nie znam ruchu o id [  ' + argMoveId + '  ]');
    return 'nieznany ruch';
  }

function displayResult(argComputerMove, argPlayerMove){
    printMessage('zagrałem ' + argComputerMove + ' ,a ty ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Wygrałeś');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Wygrałeś');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrałeś');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrałeś');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Przegrałeś');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Przegrałeś');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('remis');
    } else if (argPlayerMove == 'nic nie wybrałeś'){
        printMessage('Nie możemy grać jeśli nic nie wybierzesz');
    } else printMessage('wybrałeś niewłaściwe zagranie');    
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier'
} else {
    computerMove = 'nożyce'
} */

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/* if(playerInput == 1){
  playerMove = 'kamień';
} else if (playerInput == 2) {
    playerMove = 'papier'
} else if (playerInput == 3) {
    playerMove = 'nożyce'
} else (playerMove = 'nieznany ruch') */

displayResult(computerMove,playerMove);