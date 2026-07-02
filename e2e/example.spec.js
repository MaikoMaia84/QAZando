// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  });
  test('test', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: 'Home ' }).click();
  await page.getByRole('link', { name: 'Shop ' }).click();
  await page.getByRole('link', { name: 'Pages ' }).click();
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('maiko@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: ' Orders' }).click();
  await page.getByRole('link', { name: ' Downloads' }).click();
  await page.getByRole('link', { name: ' Addresses' }).click();
  await page.getByRole('link', { name: ' Account details' }).click();
  await page.getByRole('link', { name: ' logout' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});


