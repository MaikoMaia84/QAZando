const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const EMAIL = 'test@example.com';
  const PASSWORD = '123456';
  await page.goto('http://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill(EMAIL);
  await page.locator('#password').fill(PASSWORD);
  await page.getByRole('button', { name: 'login' }).click();
  await page.waitForURL(/.*my-account/);
  await page.getByRole('button', { name: 'OK' }).click().catch(() => {});
  await page.locator('a:has-text("Downloads")').click();
  await page.waitForURL(/customer-download/);
  await page.waitForTimeout(5000);
  const bodyText = await page.locator('body').innerText();
  console.log('URL', page.url());
  console.log('BODY TEXT START:\n', bodyText.slice(0, 2000));
  console.log('Contains Paid:', bodyText.includes('Paid'));
  console.log('Table count', await page.locator('table').count());
  console.log('Table outerHTMLs:');
  const tables = await page.locator('table').all();
  for (let i = 0; i < tables.length; i++) {
    const html = await tables[i].evaluate(el => el.outerHTML.slice(0, 1000));
    console.log(`TABLE ${i}: ${html}`);
  }
  const rowCount = await page.locator('tbody tr').count();
  console.log('tbody tr count', rowCount);
  const rows = await page.locator('tbody tr').all();
  for (let i = 0; i < rows.length; i++) {
    console.log(`ROW ${i} text:`, await rows[i].innerText());
    console.log(`ROW ${i} outerHTML:`, await rows[i].evaluate(el => el.outerHTML));
  }
  const paidRows = await page.locator('tbody tr', { hasText: 'Paid' }).count();
  console.log('tbody tr hasText Paid count', paidRows);
  const allRows = await page.locator('tbody tr').allTextContents();
  console.log('all tbody tr text contents', allRows);
  await browser.close();
})();