import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  let btnText = "Edit";
  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    btnText = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>

        <button onClick={() => handleEdit()}>{btnText}</button>
      </span>
    </li>
  );
}
