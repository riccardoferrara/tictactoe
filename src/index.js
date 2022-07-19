import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: null
        }
    }
    render() {
        return ( 
            <button className = "square" onClick={ () => {
                this.setState({value: 'X'})
                console.log('user clicks on ' + this.props.position ) 
                }
                } >
                { this.state.value }
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props){
        super(props)
        // this state contains all of the squares of the board
        this.state = {
            squares: Array(64).fill(null)
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

    // render each square, also gives the position with the chess naming l,i ex: d8
    renderSquare(l, i) {
        return (
            <Square
                position = { l + i }
                value = { this.state.squares[i] }
                onClick = { () => {this.handleClick(i)} }
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