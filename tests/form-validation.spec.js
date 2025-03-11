const { test, expect } = require('@playwright/test');

test('Fehlermeldung bei leerem Login-Formular', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username is required');
});

test('Fehlermeldung bei falschem Passwort', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');
  
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service');
});
