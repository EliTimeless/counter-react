import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleMinus() {
    setCount(count - 1);
  }

  function handlePlus() {
    setCount(count + 1);
  }

  function handleReload() {
    setCount(0);
  }
  return (
    <div>
      <div className="counter">{count}</div>
      <div>
        {" "}
        <button onClick={handleMinus}> － </button>
        <button onClick={handlePlus}> ＋ </button>
      </div>
      <button onClick={handleReload}>reload</button>
    </div>
  );
}

export default Counter;
