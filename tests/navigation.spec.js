const { test, expect } = require("@playwright/test");

test("Check Wikipedia navigation", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");

  const links = page.locator("nav.central-featured a");

  const count = await links.count();
  expect(count).toBeGreaterThan(0);

  await expect(links.first()).toBeVisible();
});
