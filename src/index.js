import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// this component is one of the 9 squares in a board
function Square(props) {
    return (
        <button
            className = "square"
            onClick = { props.onClick }
        >
            {props.value}
        </button>
    )
}

// this component is the board containing the 9 squares
class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    //this function save the value of each square in the square state
    handleClick(i) {
        const squares = this.state.squares.slice()

        // if we have a winner or the cliccked square is already fill => do nothing
        if (this.state.squares[i] || calculateWinner(this.state.squares)){
            return
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O'
        const xIsNext = !this.state.xIsNext //when there is a click, next turn is 'O' (not 'X' anymore)
        this.setState({
            squares: squares,
            xIsNext: xIsNext
        })
    }

    // function rendering i-square with the value inside
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => {this.handleClick(i)}}
            /> 
        )
    }

    //render the board
    render() {
        const winner = calculateWinner(this.state.squares)
        let status

        //if we have a winner lets show it otherwise show next turn
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }

        return ( 
            <div>
                <div className = "status" > { status } </div> 
                <div className = "board-row" > { this.renderSquare(0) } { this.renderSquare(1) } { this.renderSquare(2) } </div> 
                <div className = "board-row" > { this.renderSquare(3) } { this.renderSquare(4) } { this.renderSquare(5) } </div> 
                <div className = "board-row" > { this.renderSquare(6) } { this.renderSquare(7) } { this.renderSquare(8) } </div> 
            </div>
        );
    }
}

// this component will be used to initialise a match 
class Game extends React.Component {
    render() {
        return ( 
            <div className = "game" >
                <div className = "game-board" >
                    <Board/>
                </div> 
                <div className = "game-info" >
                    <div> { /* status */ } </div> 
                    <ol> { /* TODO */ } </ol> 
                </div> 
            </div>
        );
    }
}

function calculateWinner(squares) {
    //returns the winner as 'X', 'O' o null 
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


// ========================================

ReactDOM.render( <
    Game / > ,
    document.getElementById('root')
);