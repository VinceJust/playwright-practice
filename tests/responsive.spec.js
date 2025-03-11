const { test, expect, devices } = require("@playwright/test");

const viewports = [
  { name: "iPhone 12", device: devices["iPhone 12"] },
  { name: "iPad", device: devices["iPad (gen 7)"] },
  { name: "Galaxy S9", device: devices["Galaxy S9+"] },
];

for (const { name, device } of viewports) {
  test(`Responsive-Test auf ${name}`, async ({ browser }) => {
    const context = await browser.newContext({ ...device });
    const page = await context.newPage();
    await page.goto("https://www.wikipedia.org/");

    const mobileNav = page.locator("nav.central-featured");

    await expect(mobileNav).toBeVisible();
  });
}
