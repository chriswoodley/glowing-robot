import { useMemo } from 'react';

const sizeMultipliers = {
  xs: 6,
  sm: 12,
  md: 18,
  lg: 24,
  xl: 30
};

export function calcMaxHeight(size, multipliers, unit) {
  if (!size || !multipliers || unit == null || Number.isNaN(unit)) {
    return undefined;
  }

  const multiplier = multipliers[size];

  if (multiplier == null) {
    return undefined;
  }

  const value = unit * multiplier;

  if (Number.isNaN(value) || !Number.isFinite(value)) {
    return undefined;
  }

  return `${value}px`;
}

function useMaxHeight({ unit, size }) {
  const maxHeight = useMemo(() => {
    return calcMaxHeight(size, sizeMultipliers, unit);
  }, [unit, size]);

  return maxHeight;
}

export default useMaxHeight;
