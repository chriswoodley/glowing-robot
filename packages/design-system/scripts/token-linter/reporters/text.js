/** Simple human‑readable reporter for the token linter. */
export function textReporter(results) {
  if (!results || results.length === 0) {
    console.log('✅ No lint issues found.');
    return;
  }

  console.log(`❌ ${results.length} issue(s) detected:`);
  results.forEach((r, i) => {
    const location = r.path ? r.path.join('.') : r.file || '';
    console.log(
      `${i + 1}. [${r.category}] ${r.severity.toUpperCase()} – ${r.ruleName}\n   ${r.message}\n   at ${location}\n`,
    );
  });
}
