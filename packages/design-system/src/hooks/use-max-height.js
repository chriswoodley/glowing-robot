import { useState, useEffect } from 'react';

const sizeMultipliers = {
  xs: 6,
  sm: 12,
  md: 18,
  lg: 24,
  xl: 30
};

function calcMaxHeight(size, multipliers, unit) {
  if (size && multipliers && unit) {
    const multiplier = multipliers[size];
    const value = unit * multiplier;

    return `${value}px`;
  }

  return 'auto';
}

function useMaxHeight({ unit, size }) {
  const [ maxHeight, setMaxHeight ] = useState();

  useEffect(() => {
    const height = calcMaxHeight(size, sizeMultipliers, unit);
    setMaxHeight(height);
  }, [ unit, size ]);

  return maxHeight;
}

export default useMaxHeight;
