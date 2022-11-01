import { useRef } from "react";

export const usePrevious = (state) => {
  const currentRef = useRef(state);
  const previousRef = useRef();

  if (currentRef.current !== state) {
    previousRef.current = currentRef.current;
    currentRef.current = state;
  }
  return previousRef.current;
};
