import { useState } from "react";

import GameBoard from "./Components/GamesBoard";
import Header from "./Components/Header/Header";
import Player from "./Components/Player";
import Log from "./Components/log";

const XSymbol = "X";
const OSymbol = "O";

function retrieveCurrentPlayer(gameTurns) {
  let currentPlayer = XSymbol;

  if (gameTurns.length > 0 && gameTurns[0].player === XSymbol) {
    currentPlayer = OSymbol;
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = retrieveCurrentPlayer(gameTurns);

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

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={currentPlayer === XSymbol}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={currentPlayer === OSymbol}
            />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
