class GameBoard {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', '']
        this.xoValue = ['x', 'o']
        this.index = 0
        this.temp = ''
        this.draw = 0
    }

    putValue(id) {
        if (this.board[id - 1] !== 'x' && this.board[id - 1] !== 'o') {
            this.board[id - 1] = this.switchValue()
        }
    }
    
    switchValue() {
        const value = this.xoValue[this.index]
        this.index = (this.index + 1) % this.xoValue.length
        this.temp = value
        return value
    }

    checkWin() {
        for (let i = 0; i < 8; i++) {
            let line = ''

            switch(i) {
                case 0:
                    line = this.board[0] + this.board[1] + this.board[2];
                    break;
                case 1:
                    line = this.board[3] + this.board[4] + this.board[5];
                    break;
                case 2:
                    line = this.board[6] + this.board[7] + this.board[8];
                    break;
                case 3:
                    line = this.board[0] + this.board[3] + this.board[6];
                    break;
                case 4:
                    line = this.board[1] + this.board[4] + this.board[7];
                    break;
                case 5:
                    line = this.board[2] + this.board[5] + this.board[8];
                    break;
                case 6:
                    line = this.board[0] + this.board[4] + this.board[8];
                    break;
                case 7:
                    line = this.board[2] + this.board[4] + this.board[6];
                    break;
            }

            if (line === 'xxx') {
                return 'x'
            }
            if (line === 'ooo') {
                return 'o'
            }
        }
        this.draw += 1
        if (this.draw === 27) {
            return 'draw'
        }
    }

    reset() {
        this.board = ['', '', '', '', '', '', '', '', '']
        this.index = 0
        this.draw = 0
    }
}

export default GameBoard