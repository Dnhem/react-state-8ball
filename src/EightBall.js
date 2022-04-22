import { useState } from "react";
import "./Eightball.css";

function choice(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

const EightBall = props => {
  const [ msg, setMsg ] = useState("Think of a question.");
  const [ color, setColor ] = useState("black");

  function handleClick() {
    const { msg, color } = choice(props.answers);
    setMsg(msg);
    setColor(color);
  }

  return (
    <div className="Eightball-container">
      <div
        className="Eightball"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <b className="Eightball-text">{msg}</b>
      </div>
    </div>
  );
};

export default EightBall;
