import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Form = () => {
  const [name, setName] = useLocalStorage('name', '');
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
