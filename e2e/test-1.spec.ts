import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Pesquisar' }).fill('teste de velocidade');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dteste%2Bde%2Bvelocidade%26sca_esv%3D2a062252d383919e%26source%3Dhp%26ei%3DFlRCaqf3AZub5OUP0o3VgAU%26iflsig%3DABILxe8AAAAAakJiJqoQN0fzHHjHu-lVsJn_wELwLac9%26ved%3D0ahUKEwin2rS8qayVAxWbDbkGHdJGFVAQ4dUDCCs%26uact%3D5%26oq%3Dteste%2Bde%2Bvelocidade%26gs_lp%3DEgdnd3Mtd2l6IhN0ZXN0ZSBkZSB2ZWxvY2lkYWRlMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEj2KlAAWO0pcAV4AJABAJgBrQGgAdITqgEFMTMuMTG4AQPIAQD4AQGYAh2gAv0UwgILEAAYgAQYsQMYgwHCAg4QABiABBiKBRixAxiDAcICBBAAGAPCAgsQLhiABBixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgILEAAYgAQYigUYsQPCAgwQABiABBgKGAsYsQPCAg8QABiABBgKGAsYsQMYgwGYAwCSBwUxNC4xNaAHun-yBwQ5LjE1uAfhFMIHCDAuNC4yNC4xyAd2gAgB%26sclient%3Dgws-wiz%26sei%3DHVRCapPzCPqz5OUPmOCEoA8&q=EgSowqBvGJ2oidIGIjADpvYLM0MeAqA9Mu8lHTPYRz28suo4m59-vSsqGNK37HWXKCrPRRnllRophuQEi9cyAVJaAUM');
  await page.locator('iframe[name="a-ptk1klh2z1wt"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-ptk1klh2z1wt"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-ptk1klh2z1wt"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-ptk1klh2z1wt"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-ptk1klh2z1wt"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('div:nth-child(2) > div').first().click();
  await page.locator('iframe[name="a-ptk1klh2z1wt"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-ptk1klh2z1wt"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-ptk1klh2z1wt"]').contentFrame().getByRole('button', { name: 'Get a new challenge' }).click();
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dteste%2Bde%2Bvelocidade%26oq%3Dteste%2Bde%2Bvelocidade%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI4OTRqMGo0qAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DbFRCasHUOfPd5OUPrN2B8AI&q=EgSowqBvGO2oidIGIjB-i3yASYAmUV8o3SBooqQuYNsFQnSyTngt_bGFPbhSr2Ay1cKe_fKRdHxGscFkyVAyAVJaAUM');
});