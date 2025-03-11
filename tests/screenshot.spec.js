const { test, expect } = require("@playwright/test");

test("Take screenshot on page load", async ({ page }) => {
  await page.goto("https://example.com");
  await page.screenshot({ path: "screenshot.png" });
});
