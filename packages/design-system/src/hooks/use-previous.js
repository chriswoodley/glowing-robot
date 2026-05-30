import { useEffect, useRef } from "react";

export default function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [ value ]);

  // Accessing ref.current during render is intentional for this pattern
  // eslint-disable-next-line react-hooks/refs
  return ref.current;
}
