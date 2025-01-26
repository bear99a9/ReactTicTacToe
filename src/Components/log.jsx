export default function Log({ turns }) {
  let log = [];

  for (let i = 0; i < turns.length; i++) {
    const { square, player } = turns[i];
    const { row, col } = square;
    log.push(
      <li key={i}>
        {player} selected {row}, {col}
      </li>
    );
  }

  return <ol id="log">{log}</ol>;
}
