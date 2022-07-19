import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

    render() {
        return ( 
            <button 
                className = "square" 
                onClick = { () => {
                        this.props.onClick()
                        console.log('user clicks on ' + this.props.position ) 
                    }
                } 
            >
                { this.props.value }
            </button>
        );
    }
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

        // we are using solution B
        this.state = {
            squares: B
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
        squares[l][i] = 'X'
        this.setState({
            squares: squares
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
        const status = 'Next player: black';

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
            </div> <div className = "game-info" >
            <div> { /* status */ } </div> 
            <ol> { /* TODO */ } </ol> 
            </div> </div>
        );
    }
}

// ========================================

ReactDOM.render( <
    Game / > ,
    document.getElementById('root')
);