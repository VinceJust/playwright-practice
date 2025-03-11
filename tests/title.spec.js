const { test, expect } = require("@playwright/test");

test("Check website title", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle("Example Domain");

  await page.goto("https://www.wikipedia.org/");
  await expect(page).toHaveTitle("Wikipedia");
});
