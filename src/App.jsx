import Header from "./Components/Header/Header";
import Player from "./Components/Player";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          GameBoard
        </div>
        Log
      </main>
    </>
  );
}

export default App;
