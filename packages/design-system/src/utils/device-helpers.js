export function getIsTouchDevice() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(hover: none)').matches;
  }

  return false; // TODO: IS THERE A SERVER SIDE METHOD WE CAN USE HERE?
}
