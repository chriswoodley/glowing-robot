/**
 * Grouped reporter – prints lint issues grouped by source file.
 * Each issue shows the full token path (joined with a dot) so you can locate
 * the exact token that needs fixing.
 */
export function groupedReporter(results) {
  if (!results || results.length === 0) {
    console.log('✅ No lint issues found.');
    return;
  }

  // Organise issues by file for a clean visual separation.
  const byFile = results.reduce((map, cur) => {
    (map[cur.file] = map[cur.file] || []).push(cur);
    return map;
  }, {});

  Object.entries(byFile).forEach(([file, issues]) => {
    // Print a clear separator with the filename.
    const separator = '-'.repeat(Math.max(0, 80 - file.length - 4));
    console.log(`--- ${file} ${separator}`);

    issues.forEach((r) => {
      const path = r.path ? r.path.join('.') : '';
      console.log(
        `[${r.category}] ${r.severity.toUpperCase()} ${r.ruleName} – ${path}\n   ${r.message}`,
      );
    });
    console.log(); // extra blank line between files
  });
}
