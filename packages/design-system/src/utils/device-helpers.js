export function getIsTouchDevice() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(hover: none)').matches;
  }

  return false;
}

export function getShouldMatchViewportMaxWidth(maxWidth) {
  if (maxWidth === undefined || maxWidth === null || maxWidth === '') {
    throw new Error(`getShouldMatchViewportMaxWidth: A max-width is required.`);
  }

  if (typeof window !== 'undefined') {
    return window.matchMedia(`(max-width: ${maxWidth})`).matches;
  }

  return false;
}

export function getShouldMatchViewportMinWidth(minWidth) {
  if (minWidth === undefined || minWidth === null || minWidth === '') {
    throw new Error(`getShouldMatchViewportMinWidth: A max-width is required.`);
  }

  if (typeof window !== 'undefined') {
    return window.matchMedia(`(min-width: ${minWidth})`).matches;
  }

  return false;
}
