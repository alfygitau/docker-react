import { useState } from "react";

export const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value) => {
    setValue((prev) => (typeof value === "boolean" ? value : !prev));
  };
  return [value, toggleValue];
};
