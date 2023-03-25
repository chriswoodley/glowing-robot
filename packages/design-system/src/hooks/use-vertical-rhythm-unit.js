import { useState, useEffect } from 'react';

function getRootElementLineHeight(element) {
  const rootEl = element.querySelector(':root');
  const styles = window.getComputedStyle(rootEl);

  return Number(styles.lineHeight.replace('px', ''));
}

export default function useVerticalRhythmUnit() {
  const [ verticalRhythmUnit, setVerticalRhythmUnit ] = useState(getRootElementLineHeight(document));

  useEffect(() => {
    const resizeListener = (event) => {
      const lineHeight = getRootElementLineHeight(event.target.document);
      setVerticalRhythmUnit(lineHeight);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return verticalRhythmUnit;
}
