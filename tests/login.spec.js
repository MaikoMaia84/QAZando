const { test, expect } = require('@playwright/test');

test('login automationpratice - test@example.com / 123456', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.fill('#user', 'test@example.com');
  await page.fill('#password', '123456');
  await page.click('button:has-text("login")');

  // Verifica diálogo de sucesso com o e-mail
  await expect(page.locator('text=Olá, test@example.com')).toBeVisible({ timeout: 5000 });
});
