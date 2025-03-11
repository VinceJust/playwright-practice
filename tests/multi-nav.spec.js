const { test, expect } = require('@playwright/test');

test('Suche nach Playwright auf Wikipedia', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  await page.fill('input[name="search"]', 'Playwright');
  await page.press('input[name="search"]', 'Enter');

  await expect(page.locator('#firstHeading')).toHaveText(/Playwright(\s*\(software\))?/);
});
