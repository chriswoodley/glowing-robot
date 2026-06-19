/** Simple JSON reporter – prints a JSON array of issue objects. */
export function jsonReporter(results) {
  console.log(JSON.stringify(results, null, 2));
}
