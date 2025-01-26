import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEdit() {
    setIsEditing((editing) => !editing); // React docs say to pass a function to setState when the new state depends on the previous state
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let btnText = "Edit";
  let playerNameSpan = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameSpan = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnText = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameSpan}
        <span className="player-symbol">{symbol}</span>

        <button onClick={handleEdit}>{btnText}</button>
      </span>
    </li>
  );
}
