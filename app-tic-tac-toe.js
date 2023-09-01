const Player = (name, tag) => {

    return {name, tag};
};

const gameBoard = (() => {

    const gameBoardDisposition = ['', '', '', '', '', '', '', '', ''];

    const updateGameBoard = (position, marker) => { gameBoardDisposition[position] = marker; };

    return { gameBoardDisposition, updateGameBoard,};
})();

const gameLogic = () => {

    const listenerEvent = () => {
        let contents = document.querySelector('.container');

        for (let i = 0; i <= contents.childNodes.length - 1; i++) {
        
            let currentNode = contents.childNodes[i];
        
            if (currentNode.nodeType === 1 && currentNode.textContent == '') {
                currentNode.addEventListener('click', function() { game.gameTurn(currentNode) }); 
            }
        }
    };

    const checkWinner = (board) => { 

        if (board[0] != '' && board[0] === board[1] && board[1] === board[2]) {
            return board[0];
        }
        if (board[3] != '' && board[3] === board[4] && board[4] === board[5]) {
            return board[3];
        }
        if (board[6] != '' && board[6] === board[7] && board[7] === board[8]) {
            return board[6];
        }
        if (board[0] != '' && board[0] === board[3] && board[3] === board[6]) {
            return board[0];
        }
        if (board[1] != '' && board[1] === board[4] && board[4] === board[7]) {
            return board[1];
        }
        if (board[2] != '' && board[2] === board[5] && board[5] === board[8]) {
            return board[2];
        }
        if (board[0] != '' && board[0] === board[4] && board[4] === board[8]) {
            return board[0];
        }
        if (board[6] != '' && board[6] === board[4] && board[4] === board[2]) {
            return board[6];
        } 
    };

    const playerTurn = () => {

        if (currentPlayer.tag == 'X') {
            currentPlayer = p2;
            document.querySelector('.player').textContent = p2.name;
        } else if (currentPlayer.tag == 'O') {
            currentPlayer = p1;
            document.querySelector('.player').textContent = p1.name;
        }
       
    };
    
    const gameTurn = (currentNode) => {
        
        let winner = game.checkWinner(gameBoard.gameBoardDisposition);
        
        if (!winner) {
            currentNode.textContent = currentPlayer.tag;
            let currentPosition = parseInt(currentNode.classList[1]);
            gameBoard.updateGameBoard(currentPosition, currentPlayer.tag);

            if (game.checkWinner(gameBoard.gameBoardDisposition)) {
                console.log(game.checkWinner(gameBoard.gameBoardDisposition) + " Wins!");
            } else {
                game.playerTurn();
            }
        }
    };

    return { checkWinner, playerTurn, gameTurn, listenerEvent, };
};

const game = gameLogic();

game.listenerEvent();

const p1 = Player('Golio', 'X');

const p2 = Player('Mongol', 'O');

let currentPlayer = p1;

document.querySelector('.player').textContent = p1.name;










