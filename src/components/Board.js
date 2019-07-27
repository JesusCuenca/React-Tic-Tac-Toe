import React from "react";
import Square from "./Square";
import "../styles/Board.css";

function Board(props) {
  return (
    <div className="main-board">
      {props.board.map((value, index) => (
        <Square
          key={index.toString()}
          value={value}
          onClick={() => props.onSquareClicked(index)}
        />
      ))}
    </div>
  );
}

export default Board;
