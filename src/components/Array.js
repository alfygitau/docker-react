import React from "react";
import { useArray } from "../hooks/useArray";

const Array = () => {
  const [array, add, filter, replace, clear, remove] = useArray([
    1, 2, 3, 4, 5, 6, 7,
  ]);
  return (
    <div>
      <div>{array.join(",")}</div>
      <button onClick={() => add(5)}>Add 5</button>
      <button onClick={() => filter((el) => el >= 3)}>Filter</button>
      <button onClick={() => replace(4, 10)}>Replace</button>
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => remove(2)}>Remove</button>
    </div>
  );
};

export default Array;
