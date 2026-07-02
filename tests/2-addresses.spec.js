const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const VIDEO_OUTPUT_DIR = 'C:\\Users\\elgan\\OneDrive\\Email attachments\\Documentos\\projetos';
const EMAIL = 'test@example.com';
const PASSWORD = '123456';

test.use({ video: 'on' });

async function saveVideo(page, fileName) {
  const video = page.video();
  await page.waitForTimeout(1000);
  await page.close();
  if (video) {
    const videoPath = await video.path();
    fs.mkdirSync(VIDEO_OUTPUT_DIR, { recursive: true });
    fs.copyFileSync(videoPath, path.join(VIDEO_OUTPUT_DIR, fileName));
  }
}

async function closeSuccessDialog(page) {
  await page.getByRole('button', { name: 'OK' }).click({ timeout: 3000 }).catch(() => {});
}

test('Teste 2 - conta exatamente 2 endereços de entrega', async ({ page }) => {
  await page.goto('http://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill(EMAIL);
  await page.locator('#password').fill(PASSWORD);
  await page.getByRole('button', { name: 'login' }).click();
  await page.waitForURL(/.*my-account/);
  await closeSuccessDialog(page);

  await page.locator('a:has-text("Addresses")').click();
  await expect(page).toHaveURL(/customer-address/);

  await expect(page.getByRole('heading', { name: 'Billing Address' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Shipping Address' })).toBeVisible();

  await page.waitForTimeout(5000);
  await saveVideo(page, '2Enderecos.webm');
});