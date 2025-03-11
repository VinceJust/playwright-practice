const { test, expect } = require("@playwright/test");

test("Search Playwright on Wikipedia", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");

  await page.fill("#searchInput", "Playwright");
  await page.press("#searchInput", "Enter");

  await expect(page).toHaveURL(/(search|wiki\/Playwright)/);

  await expect(page.locator("#firstHeading")).toHaveText(/Playwright/);
});
