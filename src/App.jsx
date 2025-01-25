import Header from "./Components/Header/Header";
import Player from "./Components/Player";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
          GameBoard
        </div>
        Log
      </main>
    </>
  );
}

export default App;
