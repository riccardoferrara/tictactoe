import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
    console.log('props value: ' + props.value)
    let marker_class
    if (props.value === 'B'){marker_class = 'marker black_bg'}
    if (props.value === 'W'){marker_class = 'marker white_bg'}
    return ( 
        <button 
            className = "square" 
            onClick = { () => {
                    props.onClick()
                    console.log('user clicks on ' + props.position ) 
                }
            } 
        >
            <div class={marker_class}></div>
        </button>
    );
}

function intializeGame(squares){
    squares['d'][4] = 'B'
    squares['e'][5] = 'B'
    squares['d'][5] = 'W'
    squares['e'][4] = 'W'
    return squares
}

class Board extends React.Component {
    constructor(props){
        super(props)
        // this state contains all of the squares of the board
        //----------------------------------
        // we will use the solution A or B:
        //----------------------------------

        // solution A -> list: 8 elements of 8 elements [[null, null, ...], [null, null, ...]]
        let A = Array(8).fill(null).map(e=>Array(8).fill(null))

        // solution B -> obj: {a: [null, null, ...], b: [null, null, ...]}
        let B = {}
        let b = ['a','b','c','d','e','f','g','h']
        b.forEach(e => B[e] = Array(8).fill(null))
        B = intializeGame(B)

        // we are using solution B
        this.state = {
            squares: B,
            blackIsNext: true
        }
    }

    // render each row of the board (rendering the 8 squares inside)
    renderRow(i){
        return(
            <div>
                {this.renderSquare('a', i)}
                {this.renderSquare('b', i)}
                {this.renderSquare('c', i)}
                {this.renderSquare('d', i)}
                {this.renderSquare('e', i)}
                {this.renderSquare('f', i)}
                {this.renderSquare('g', i)}
                {this.renderSquare('h', i)}
            </div>
        )            
    }

    // this function saves the value of each square in the square state
    handleClick(l, i) {
        const squares = this.state.squares
        squares[l][i] = this.state.blackIsNext ? 'B' : 'W'
        const blackIsNext = !this.state.blackIsNext
        this.setState({
            squares: squares,
            blackIsNext: blackIsNext
        })
    }

    // render each square, also gives the position with the chess naming l,i ex: d8
    renderSquare(l, i) {
        return (
            <Square
                position = { l + i }
                value = { this.state.squares[l][i] }
                onClick = { () => {this.handleClick(l, i)} }
            />
        )
        
    }  

    render() {
        const nextPlayer = this.state.blackIsNext? 'black' : 'white'
        const status = 'Current player: ' + nextPlayer;

        // render the 8 rows
        return ( 
            <div >
                <div className = "status" > { status } </div> 
                <div className = "board-row" > { this.renderRow(8) }</div>
                <div className = "board-row" > { this.renderRow(7) }</div>
                <div className = "board-row" > { this.renderRow(6) }</div>
                <div className = "board-row" > { this.renderRow(5) }</div>
                <div className = "board-row" > { this.renderRow(4) }</div>
                <div className = "board-row" > { this.renderRow(3) }</div>
                <div className = "board-row" > { this.renderRow(2) }</div>
                <div className = "board-row" > { this.renderRow(1) }</div>
            </div> 
        );
    }
}

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

// ========================================

ReactDOM.render( <
    Game / > ,
    document.getElementById('root')
);