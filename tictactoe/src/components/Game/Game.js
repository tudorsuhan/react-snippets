import React, { Component } from 'react';
import Board from '../Board/Board.js';
import './Game.css';
import History from '../../utils/History.js';
import calculateWinner from '../../utils/calculateWinner.js';

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState({ 
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map(( step, move ) => {
            const desc = move ? 
                'Go to move #' + move : 
                'Go to game start';
            return(
                <li key={move} className="status__history">
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        })

        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : '0');
        }

        return (
            <div className="game">
                <div className="game__board">
                    <Board 
                        squares={current.squares} 
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game__info">
                    <div className="status">{status}</div>
                    <ol className="moves">{moves}</ol>
                </div>
            </div>
        );
    }
}
