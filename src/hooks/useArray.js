import { useState } from "react";

export const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const add = (element) => {
    setArray((prev) => [...prev, element]);
  };

  const filter = (callback) => {
    setArray((val) => val.filter(callback));
  };

  const replace = (index, element) => {
    setArray((a) => [
      ...a.slice(0, index),
      element,
      ...a.slice(index + 1, a.length - 1),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  const remove = (index) => {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  };
  return [array, add, filter, replace, clear, remove];
};
