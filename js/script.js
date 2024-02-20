// import GameBoard from './GameBoard.js';
// import XElement from './XElement.js';
// import OElement from './OElement.js';

const boardContainer = document.querySelector('.board-container')
const board = document.querySelectorAll('.board')

const addTile = () => {
    
}

board.forEach((el) => el.addEventListener('click', addTile))