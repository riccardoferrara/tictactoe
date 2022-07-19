import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return ( <button className = "square" > { /* TODO */ } </button>
        );
    }
}

class Board extends React.Component {
    renderRow(l){
        return(
            <div>
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        )            
    }

    renderSquare(i) {
        return <Square / >;
    }  

    render() {
        const status = 'Next player: black';

        return ( 
            <div >
                <div className = "status" > { status } </div> 
                <div className = "board-row" > { this.renderRow('a') }</div>
                <div className = "board-row" > { this.renderRow('b') }</div>
                <div className = "board-row" > { this.renderRow('c') }</div>
                <div className = "board-row" > { this.renderRow('d') }</div>
                <div className = "board-row" > { this.renderRow('e') }</div>
                <div className = "board-row" > { this.renderRow('f') }</div>
                <div className = "board-row" > { this.renderRow('g') }</div>
                <div className = "board-row" > { this.renderRow('h') }</div>
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