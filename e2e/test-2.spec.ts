import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: 'Home ' }).click();
  await page.getByRole('link', { name: 'Shop ' }).click();
  await page.getByRole('link', { name: 'Pages ' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('#offcanvas-wishlish').getByRole('button', { name: 'icon' }).click();
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('maiko@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: ' Downloads' }).click();
  await page.getByRole('cell', { name: 'Black T-Shirt For Woman' }).click();
  await page.getByRole('columnheader', { name: 'Product' }).click();
  await page.getByRole('columnheader', { name: 'Ordered' }).click();
  await page.getByRole('columnheader', { name: 'Status' }).click();
  await page.getByRole('columnheader', { name: 'Download' }).click();
  await page.getByRole('link', { name: ' Addresses' }).click();
  await page.getByRole('heading', { name: 'Billing Address' }).click();
  await page.getByRole('heading', { name: 'Shipping Address' }).click();
  await page.getByRole('link', { name: ' Account details' }).click();
  await page.getByText('First Name').click();
  await page.getByText('Last Name').click();
  await page.getByText('Email', { exact: true }).click();
  await page.getByText('Password').click();
  await page.getByText('Birthdate').click();
  await page.locator('input[name="first-name"]').click();
  await page.locator('input[name="last-name"]').click();
  await page.locator('input[name="email-name"]').click();
  await page.locator('input[name="user-password"]').click();
  await page.getByText('You may unsubscribe at any').click();
  await page.getByText('maiko@gmail.com Dashboard').click();
  await page.locator('i').nth(1).click();
  await page.locator('i').nth(1).click();
  await page.getByText('maiko@gmail.com Dashboard').click();
  await page.getByRole('link', { name: ' Addresses' }).click();
  await page.getByRole('button', { name: 'Edit Address' }).first().click();
  await page.getByRole('button', { name: 'Edit Address' }).first().click({
    modifiers: ['ControlOrMeta']
  });
});