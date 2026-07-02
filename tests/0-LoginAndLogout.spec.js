import { test, expect } from '@playwright/test';

//const button = page.locator('button');


test('test @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await expect(page).toHaveTitle(/QAZANDO Shop E-Commerce/);+
  await page.getByRole('heading', { name: 'NEWSLETTER' }).click();

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()



  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('maiko@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('caca231');
  await page.getByRole('heading', { name: 'Login' }).click();
  await page.screenshot ({ path: './tests/Evidencia_0-LoginAndLogout/1-Login.png'});



  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('heading', { name: 'Login realizado' }).click();
   await page.screenshot ({ path: './tests/Evidencia_0-LoginAndLogout/2-Login Realizado.png'});


  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: ' Orders' }).click();
  await page.getByRole('heading', { name: 'Orders' }).click();
  await page.screenshot ({ path: './tests/Evidencia_0-LoginAndLogout/3-Orders.png'});


  await page.getByRole('link', { name: ' Downloads' }).click();
  await page.getByRole('heading', { name: 'Download Invoices' }).click();
  await page.screenshot ({ path: './tests/Evidencia_0-LoginAndLogout/4-Download invoices.png'});


  await page.getByRole('link', { name: ' Addresses' }).click();
  await page.getByRole('heading', { name: 'Billing Address' }).click();
  await page.screenshot ({ path: './tests/Evidencia_0-LoginAndLogout/5-Adress.png'});


  await page.getByRole('link', { name: ' Account details' }).click();
  await page.getByRole('heading', { name: 'Account details' }).click();
  await page.screenshot ({ path: './tests/Evidencia_0-LoginAndLogout/6-Account.png'});

   
  const button = await page.getByRole ('button', {name: 'Send Mail'}) 
  await button.scrollIntoViewIfNeeded()


  await page.getByRole('link', { name: ' logout' }).click();
  await page.getByRole('heading', { name: 'Logout Sucessfull' }).click();
  await page.screenshot ({ path: './tests/Evidencia_0-LoginAndLogout/7-Logout Sucessfull.png'});
  

  await page.getByRole('button', { name: 'OK' }).click();3
  await page.locator('#user').click();
  await page.locator('#password').click();
  await page.screenshot ({ path: './tests/Evidencia_0-LoginAndLogout/8-Tela de login novamente.png'});

});