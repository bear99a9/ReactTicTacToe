import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handlePlay(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      let updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ]; // in javascript, this is the recommend way to create a deep copy of a 2D array avoid mutating the original array

      updatedGameBoard[rowIndex][colIndex] = "X";

      return updatedGameBoard;
    });
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handlePlay(rowIndex, colIndex)}>
                    {playSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
