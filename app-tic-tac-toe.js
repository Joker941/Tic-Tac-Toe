const Player = (name, tag) => {

    return {name, tag};
};

const gameBoard = (() => {

    const gameBoardDisposition = ['', '', '', '', '', '', '', '', ''];

    const updateGameBoard = (position, marker) => { gameBoardDisposition[position] = marker; };

    return { gameBoardDisposition, updateGameBoard,};
})();

const gameTours = () => {

    const checkWinner = (board) => { 

        if (board[0] != '' && board[0] === board[1] && board[1] === board[2]) { //OK
            return 'ligne 1, OK';
        }
        if (board[3] != '' && board[3] === board[4] && board[4] === board[5]) { // Pas OK
            return 'ligne 2, OK';
        }
        if (board[6] != '' && board[6] === board[7] && board[7] === board[8]) { // Pas OK
            return 'ligne 3, OK';
        }
        if (board[0] != '' && board[0] === board[3] && board[3] === board[6]) { //OK
            return 'colonne 1, OK';
        }
        if (board[1] != '' && board[1] === board[4] && board[4] === board[7]) { // Pas OK
            return 'colonne 2, OK';
        }
        if (board[2] != '' && board[2] === board[5] && board[5] === board[8]) { // Pas OK
            return 'colonne 3, OK';
        }
        if (board[0] != '' && board[0] === board[4] && board[4] === board[8]) { //OK
            return 'diagonale 1, OK';
        }
        if (board[6] != '' && board[6] === board[4] && board[4] === board[2]) { //OK
            return 'diagonale 2, OK';
        } 
    };

    return { checkWinner, };
};

const p1 = Player('Golio', 'X');

const p2 = Player('Mongol', 'O');

const game = gameTours();

let contents = document.querySelector('.container');

for (let i = 0; i <= contents.childNodes.length - 1; i++) {

    if (contents.childNodes[i].nodeType === 1) {
        
        contents.childNodes[i].addEventListener('click', () => { 
            if (contents.childNodes[i].textContent == '') {
                contents.childNodes[i].textContent = 'X';
                let currentPosition = parseInt(contents.childNodes[i].classList[1]);
                gameBoard.updateGameBoard(currentPosition, 'X');
            }
        });

    }
}


document.querySelector('.showArray').addEventListener('click', () => { 
    for (let i = 0; i < gameBoard.gameBoardDisposition.length; i++) {
        console.log(`Position : ${i} / valeur : ${gameBoard.gameBoardDisposition[i]}`);
    }
    console.log("check winner : " + game.checkWinner(gameBoard.gameBoardDisposition));
});

