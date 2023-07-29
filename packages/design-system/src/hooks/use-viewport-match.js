import { useCallback, useEffect, useState } from "react";
import {
  getShouldMatchViewportMaxWidth,
  getShouldMatchViewportMinWidth
} from "utils/device-helpers";

export default function useViewportMatch({ type, value }) {
  const [ result, setResult ] = useState(false);

  const handleResize = useCallback(() => {
    if (type === 'max') {
      setResult(getShouldMatchViewportMaxWidth(value));
    } else {
      setResult(getShouldMatchViewportMinWidth(value));
    }
  }, [ value, type, setResult ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize(value);

      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [ value, setResult, handleResize ]);

  return result;
}
