import React from "react";
import { useToggle } from "../hooks/useToggle";

const Toggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useToggle(false);
  return (
    <div>
      <p>{isLoggedIn ? "true" :"false"}</p>
      <button onClick={setIsLoggedIn}>Toggle</button>
    </div>
  );
};

export default Toggle;
