const fs = require('fs');

const data = JSON.parse(fs.readFileSync('test-results/results.json', 'utf8'));
const { expected, unexpected, flaky, skipped } = data.stats;

let rows = '';
for (const suite of data.suites) {
  for (const spec of suite.specs) {
    const status = spec.ok ? '✅ PASSED' : '❌ FAILED';
    const color = spec.ok ? '#16a34a' : '#dc2626';
    rows += `
      <tr>
        <td style="padding:8px;border:1px solid #ddd;">${spec.title}</td>
        <td style="padding:8px;border:1px solid #ddd;color:${color};font-weight:bold;">${status}</td>
      </tr>`;
  }
}

const html = `
  <div style="font-family:Arial,sans-serif;max-width:600px;">
    <h2>Playwright Test Summary</h2>
    <p><strong>Passed:</strong> ${expected} | <strong>Failed:</strong> ${unexpected} | <strong>Flaky:</strong> ${flaky} | <strong>Skipped:</strong> ${skipped}</p>
    <table style="border-collapse:collapse;width:100%;">
      <thead>
        <tr style="background:#f3f4f6;">
          <th style="padding:8px;border:1px solid #ddd;text-align:left;">Test Case</th>
          <th style="padding:8px;border:1px solid #ddd;text-align:left;">Status</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
`;

fs.writeFileSync('email-report.html', html);
