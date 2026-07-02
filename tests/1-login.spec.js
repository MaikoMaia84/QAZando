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

test('Teste 1 - login válido redireciona para a conta do usuário', async ({ page }) => {
  await page.goto('http://automationpratice.com.br/')
  await page.waitForLoadState('networkidle');
  await page.screenshot ({ path: 'screenchot home2.png'});

  await page.getByRole('link', { name: ' Login' }).click();
  await page.waitForLoadState('networkidle');

  
  await page.locator('#user').fill(EMAIL);
  await page.locator('#password').fill(PASSWORD);
  await page.screenshot ({ path: 'user e senha.png'});

  await page.getByRole('button', { name: 'login' }).click();
  await page.waitForLoadState('networkidle');
 

  await page.waitForURL(/.*my-account/);
  await closeSuccessDialog(page);
  await expect(page.locator(`text=Olá, ${EMAIL}`)).toBeVisible();

 
  await saveVideo(page, '1-login.webm');
});