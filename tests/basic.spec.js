const { test, expect } = require('@playwright/test');

test('Example.com page has correct title and content', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  const heading = await page.locator('h1');
  await expect(heading).toHaveText('Example Domain');
}); 