import React, { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const previousCount = usePrevious(counter);

  const increment = () => {
    setCounter((prev) => prev + 5);
  };
  const decrement = () => {
    setCounter((prev) => prev - 5);
  };

  return (
    <div>
      <p>{counter}</p>
      <p>{previousCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
