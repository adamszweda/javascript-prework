const playGame = function (playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
        if(argMoveId == 1) {
            return 'kamień';
        } else if(argMoveId == 2) {
            return 'papier';
        } else if(argMoveId == 3) {
            return 'nożyce';
        } 
    
        printMessage('Nie znam ruchu o id [  ' + argMoveId + '  ]');
        return 'nieznany ruch';
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1),
          computerMove = getMoveName(randomNumber),
          playerMove = getMoveName(playerInput);

    const displayResult = function (argComputerMove, argPlayerMove) {
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
        } else if (argPlayerMove == 'nic nie wybrałeś') {
            printMessage('Nie możemy grać jeśli nic nie wybierzesz');
        } else {
            printMessage('wybrałeś niewłaściwe zagranie');
        }
    }  
    console.log('Wylosowana liczba to: ' + randomNumber); 
    console.log('Gracz wpisał: ' + playerInput);
     
    displayResult(computerMove,playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){playGame(1)});
document.getElementById('play-paper').addEventListener('click', function(){playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)});

