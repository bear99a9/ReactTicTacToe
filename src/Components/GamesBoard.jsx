export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handlePlay(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     let updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ]; // in javascript, this is the recommend way to create a deep copy of a 2D array avoid mutating the original array

  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;

  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={!!playSymbol}
                  >
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
