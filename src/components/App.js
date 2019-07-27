import React from 'react';
import Board from './Board';
import Background from './Background';

import calculateWinner from '../config/calculateWinner';
import boardFilled from '../config/boardFilled';
import { X, O } from '../config';
import '../styles/App.css';
import GameInfo from './GameInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentTurn: X,
      xWinsCount: 0,
      oWinsCount: 0,
      oColor: 'red',
      xColor: 'yellow',
      winner: null,
      tie: false,
    };
  }

  nextTurn() {
    return this.state.currentTurn === X ? O : X;
  }

  onSquareClicked(i) {
    const board = this.state.board.slice();
    if (this.state.winner !== null || board[i] !== null) {
      return;
    }

    board[i] = this.state.currentTurn;
    const winner = calculateWinner(board);
    const extra = {};
    if (winner === X) {
      extra.xWinsCount = this.state.xWinsCount + 1;
    } else if (winner === O) {
      extra.oWinsCount = this.state.oWinsCount + 1;
    }
    this.setState({
      board,
      currentTurn: this.nextTurn(),
      tie: winner === null && boardFilled(board),
      winner,
      ...extra,
    });
  }

  changeXColor(color) {
    this.setState({
      xColor: color,
    });
  }

  changeOColor(color) {
    this.setState({
      oColor: color,
    });
  }

  startNewGame() {
    this.setState({
      board: Array(9).fill(null),
      winner: null,
      tie: false,
    });
  }

  render() {
    let cs = `app app-layout x-${this.state.xColor} o-${this.state.oColor}`;
    if (this.state.winner === X) cs = cs + ' x-winner';
    else if (this.state.winner === O) cs = cs + ' o-winner';
    if (this.state.winner === null && !this.state.tie) {
      cs = cs + (this.state.currentTurn === X ? ' x-turn' : ' o-turn');
    }
    return (
      <div className={cs}>
        <Background />
        <Board
          onSquareClicked={this.onSquareClicked.bind(this)}
          board={this.state.board}
        />
        <GameInfo
          currentTurn={this.state.currentTurn}
          xWinsCount={this.state.xWinsCount}
          oWinsCount={this.state.oWinsCount}
          oColor={this.state.oColor}
          xColor={this.state.xColor}
          winner={this.state.winner}
          tie={this.state.tie}
          changeOColor={this.changeOColor.bind(this)}
          changeXColor={this.changeXColor.bind(this)}
        />
        {(this.state.winner !== null || this.state.tie) && (
          <button
            className="app--reset-game"
            type="button"
            onClick={() => this.startNewGame()}
          >
            Volver a jugar
          </button>
        )}
      </div>
    );
  }
}

export default App;
