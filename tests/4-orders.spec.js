const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const VIDEO_OUTPUT_DIR = 'C:\\Users\\elgan\\OneDrive\\Email attachments\\Documentos\\projetos';
const EMAIL = 'test@example.com';
const PASSWORD = '123456';

test.use({ video: 'on' });

async function saveVideo(page, fileName) {
  const videoPath = page.video() ? await page.video().path() : null;
  await page.waitForTimeout(1000);
  if (videoPath) {
    fs.mkdirSync(VIDEO_OUTPUT_DIR, { recursive: true });
    fs.copyFileSync(videoPath, path.join(VIDEO_OUTPUT_DIR, fileName));
  }
  await page.close();
}

async function closeSuccessDialog(page) {
  await page.getByRole('button', { name: 'OK' }).click({ timeout: 3000 }).catch(() => {});
}

test('Teste 4 - Orders abre e exibe histórico de pedidos', async ({ page }) => {
  await page.goto('http://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill(EMAIL);
  await page.locator('#password').fill(PASSWORD);
  await page.getByRole('button', { name: 'login' }).click();
  await page.waitForURL(/.*my-account/);
  await closeSuccessDialog(page);

  await page.locator('a:has-text("Orders")').click();
  await expect(page).toHaveURL(/customer-order/);
  await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible();
  await expect(page.locator('table')).toHaveCount(1);

  await page.waitForTimeout(5000);
  await saveVideo(page, '4-Orders.webm');
});