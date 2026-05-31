import { useState, useEffect } from 'react';

function getRootLineHeight() {
  if (typeof document === 'undefined') {
    return undefined;
  }

  const rootEl = document.querySelector(':root');

  if (!rootEl) {
    return undefined;
  }

  const styles = window.getComputedStyle(rootEl);
  const lineHeight = styles.lineHeight;

  // lineHeight can be "normal" (non-px) which would produce NaN
  if (!lineHeight || !lineHeight.endsWith('px')) {
    return undefined;
  }

  return Number(lineHeight.replace('px', ''));
}

export function useVerticalRhythmUnit() {
  // Always initialize to undefined for SSR/hydration consistency.
  // The effect will compute the actual value on the client.
  const [verticalRhythmUnit, setVerticalRhythmUnit] = useState(undefined);

  useEffect(() => {
    // Set the initial value on the client asynchronously to avoid
    // synchronous state updates within the effect body, which can
    // trigger cascading renders in StrictMode.
    const lineHeight = getRootLineHeight();

    if (lineHeight !== undefined) {
      // Defer the state update to the next tick.
      setTimeout(() => setVerticalRhythmUnit(lineHeight), 0);
    }

    const resizeListener = () => {
      const currentLineHeight = getRootLineHeight();

      if (currentLineHeight !== undefined) {
        // Also defer updates triggered by resize events.
        setTimeout(() => setVerticalRhythmUnit(currentLineHeight), 0);
      }
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return verticalRhythmUnit;
}
