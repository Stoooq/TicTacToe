import GameBoard from './GameBoard.js';
import XElement from './XElement.js';
import OElement from './OElement.js';

const board = document.querySelectorAll('.board')
const winnerDisplay = document.querySelector('.winner')
const playerDisplay = document.querySelector('.player')
const messageDisplay = document.querySelector('.message')
const resetBtn = document.querySelector('.reset')

const gameBoard = new GameBoard()

const showBoard = (id, player) => {
    const element = document.createElement('div')
    let boardElement = null

    for (let el of board) {
        if (el.getAttribute('data-id') === id) {
            boardElement = el
        }
    }

    if (boardElement.firstChild === null) {
        element.classList.add(`${player.content}-element`)
        element.textContent = player.content
    
        boardElement.appendChild(element)
    }
}

const checkPlayer = () => {
    let player = ''
    if (gameBoard.temp === 'x') {
        player = new XElement
    }
    if (gameBoard.temp === 'o') {
        player = new OElement
    }
    return player
}

const checkWinPlayer = (player) => {
    gameBoard.checkWin() === 'x' || gameBoard.checkWin() === 'o' ? showWinner(player) : null
    gameBoard.checkWin() === 'draw' ? showWinner('draw') : null
}

const showWinner = (player) => {
    winnerDisplay.classList.remove('hide')
    if (player === 'draw') {
        messageDisplay.textContent = 'Draw'
        return
    }
    messageDisplay.textContent = 'Winner'
    playerDisplay.textContent = player.content
}

const addTile = (e) => {
    const id = e.target.getAttribute('data-id')
    gameBoard.putValue(id)
    const player = checkPlayer()
    showBoard(id, player)
    checkWinPlayer(player)
}

const resetBoard = () => {
    winnerDisplay.classList.add('hide')
    gameBoard.reset()
    messageDisplay.textContent = ''
    playerDisplay.textContent = ''
    board.forEach((tile) => tile.textContent = '')
}

board.forEach((tile) => tile.addEventListener('click', addTile))
resetBtn.addEventListener('click', resetBoard)