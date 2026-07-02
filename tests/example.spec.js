// @ts-check
import { test, expect } from '@playwright/test';

test('has mmaia', async ({ page }) => {
  await page.goto('http://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@tet');
  await page.locator('#user').press('Enter');
  await page.locator('#user').fill('teste@teste.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});


