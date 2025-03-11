const { test, expect } = require('@playwright/test');

test('Checkout mit erfolgreicher Bestellung', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('.inventory_item button');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.click('.shopping_cart_link');
  await page.click('#checkout');
  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

test('Fehlermeldung bei leerer Postleitzahl', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('.inventory_item button');
  await page.click('.shopping_cart_link');
  await page.click('#checkout');
  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.click('#continue');
  await expect(page.locator('[data-test="error"]')).toHaveText('Error: Postal Code is required');
});
