import { useState, useEffect } from 'react';

function getRootElementLineHeight(element) {
  if (typeof window !== 'undefined' && element) {
    const rootEl = element.querySelector(':root');
    const styles = window.getComputedStyle(rootEl);

    return Number(styles.lineHeight.replace('px', ''));
  }
}

export default function useVerticalRhythmUnit() {
  const theDocument = typeof window !== 'undefined' ? document : undefined;
  const [ verticalRhythmUnit, setVerticalRhythmUnit ] = useState(getRootElementLineHeight(theDocument));

  useEffect(() => {
    const resizeListener = (event) => {
      const lineHeight = getRootElementLineHeight(event?.target?.document);

      if (lineHeight !== undefined) {
        setVerticalRhythmUnit(lineHeight);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeListener);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeListener);
      }
    };
  }, []);

  return verticalRhythmUnit;
}
