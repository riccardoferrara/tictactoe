import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// this component is one of the 9 squares in a board
class Square extends React.Component {
    render() {
        return ( 
            <button className = "square" > { /* TODO */ } </button>
        );
    }
}

// this component is the board containing the 9 squares
class Board extends React.Component {
    renderSquare(i) {
        return <Square/> ;
    }

    render() {
        const status = 'Next player: X';

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

// ========================================

ReactDOM.render( <
    Game / > ,
    document.getElementById('root')
);