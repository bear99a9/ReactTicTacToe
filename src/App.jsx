import { useState } from "react";

import GameBoard from "./Components/GamesBoard";
import Header from "./Components/Header/Header";
import Player from "./Components/Player";
import Log from "./Components/log";

const XSymbol = "X";
const OSymbol = "O";

function App() {
  const [activePlayer, setActivePlayer] = useState(XSymbol);
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((player) => (player === XSymbol ? OSymbol : XSymbol));

    setGameTurns((prevTurns) => {
      let currentPlayer = XSymbol;

      if (prevTurns.length > 0 && prevTurns[0].player === XSymbol) {
        currentPlayer = OSymbol;
      }

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
              isActive={activePlayer === XSymbol}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === OSymbol}
            />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
