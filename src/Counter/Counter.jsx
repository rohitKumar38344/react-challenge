import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  function incrCount() {
    setCount(count + 1);
  }
  function decrCount() {
    setCount(count - 1);
  }
  return (
    <div className="counter-ctn">
      <h2 className="count">{count}</h2>
      <div className="btn-ctn">
        <button onClick={incrCount}>Increment</button>
        <button onClick={decrCount}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
