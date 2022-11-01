import { useEffect, useState } from "react";

function getSavedValue (key, initialValue) {
  const storedValue = JSON.parse(localStorage.getItem(key));
  if (storedValue) return storedValue;
  
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue]
};
