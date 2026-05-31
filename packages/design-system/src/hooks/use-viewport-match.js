import { useCallback, useEffect, useState } from 'react';
import {
  getShouldMatchViewportMaxWidth,
  getShouldMatchViewportMinWidth,
} from 'utils/device-helpers';

function getInitialMatch(type, value) {
  if (typeof window !== 'undefined') {
    return type === 'max'
      ? getShouldMatchViewportMaxWidth(value)
      : getShouldMatchViewportMinWidth(value);
  }

  return false;
}

export function useViewportMatch({ type, value }) {
  const [result, setResult] = useState(() => getInitialMatch(type, value));

  const handleResize = useCallback(() => {
    if (type === 'max') {
      setResult(getShouldMatchViewportMaxWidth(value));
    } else {
      setResult(getShouldMatchViewportMinWidth(value));
    }
  }, [value, type]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [handleResize]);

  return result;
}
