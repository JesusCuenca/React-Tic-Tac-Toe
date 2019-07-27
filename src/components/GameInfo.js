import React from 'react';
import { colors, X, O } from '../config';
import '../styles/GameInfo.css';

function GameInfo(props) {
  const x = {
    wins: props.xWinsCount,
    isWinner: props.winner === X,
    isLoser: props.winner === O,
    hasTurn: props.currentTurn === X,
  };
  const o = {
    wins: props.oWinsCount,
    isWinner: props.winner === O,
    isLoser: props.winner === X,
    hasTurn: props.currentTurn === O,
  };
  const availableColors = colors.filter(
    color => color !== props.oColor && color !== props.xColor
  );
  const showTotalWins = x.wins + o.wins > 0;

  return (
    <div className="game-info">
      <div className="game-info__block game-info__block--x">
        <div className="game-info__player-token x-value" />
        {showTotalWins && (
          <p className="game-info__total-wins game-info__total-wins--x">
            {x.wins}
          </p>
        )}
        {x.isWinner && <p className="game-info__result">¡Has ganado!</p>}
        {x.isLoser && <p className="game-info__result">Has perdido...</p>}
        {props.tie && (
          <p className="game-info__result">
            Los dos habéis ganado
            <span>y los dos habéis perdido.</span>
          </p>
        )}
        <div className="game-info__change-token">
          {availableColors.map(color => {
            return (
              <button
                key={`x-change-color-${color}`}
                className={`token-${color}`}
                onClick={() => props.changeXColor(color)}
              />
            );
          })}
        </div>
      </div>
      <div className="game-info__block game-info__block--o">
        <div className="game-info__player-token o-value" />
        {showTotalWins && (
          <p className="game-info__total-wins game-info__total-wins--o">
            {o.wins}
          </p>
        )}
        {o.isWinner && <p className="game-info__result">¡Has ganado!</p>}
        {o.isLoser && <p className="game-info__result">Has perdido...</p>}
        {props.tie && (
          <p className="game-info__result">
            Los dos habéis ganado
            <span>y los dos habéis perdido.</span>
          </p>
        )}
        <div className="game-info__change-token">
          {availableColors.map(color => {
            return (
              <button
                key={`o-change-color-${color}`}
                className={`token-${color}`}
                onClick={() => props.changeOColor(color)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
