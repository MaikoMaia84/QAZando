const { test, expect } = require('@playwright/test');

test.use({ 
    viewport: { width: 500, height: 500}, });

test('login automationpratice - wait 3s between steps and record video', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.waitForTimeout(3000);

  await page.click('text=Login');
  await page.screenshot ({ path: 'screenchot.png'});
  await page.waitForTimeout(3000);

  const email = 'usuario.teste@example.com';
  const senha = '654321';
  await page.fill('#user', email);
  await page.waitForTimeout(3000);
  await page.fill('#password', senha);
  await page.waitForTimeout(3000);

  await page.click('button:has-text("login")');
  await page.screenshot ({ path: 'screenchot.png'});
  await page.waitForTimeout(3000);

  // Verifica diálogo de sucesso contendo o e-mail
  await expect(page.locator(`text=Olá, ${email}`)).toBeVisible({ timeout: 5000 });


});
