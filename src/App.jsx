import { useState } from "react";

import GameBoard from "./Components/GamesBoard";
import GameOver from "./Components/GameOver";
import Header from "./Components/Header/Header";
import Player from "./Components/Player";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";

const X_SYMBOL = "X";
const O_SYMBOL = "O";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function retrieveCurrentPlayer(gameTurns) {
  let currentPlayer = X_SYMBOL;

  if (gameTurns.length > 0 && gameTurns[0].player === X_SYMBOL) {
    currentPlayer = O_SYMBOL;
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  const currentPlayer = retrieveCurrentPlayer(gameTurns);

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = retrieveCurrentPlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleResetGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={currentPlayer === X_SYMBOL}
              onPlayerNameChange={handlePlayerNameChange}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={currentPlayer === O_SYMBOL}
              onPlayerNameChange={handlePlayerNameChange}
            />
          </ol>
          {(winner || isDraw) && (
            <GameOver winner={winner} onResetGame={handleResetGame} />
          )}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
