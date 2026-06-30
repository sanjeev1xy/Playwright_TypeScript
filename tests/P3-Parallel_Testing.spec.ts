import { test, expect } from '@playwright/test';

test('Google Test', async ({ page }) => 
{
  await page.goto('https://www.google.com');    // Open Google website
  await expect(page).toHaveTitle(/Google/);     // Verify page title
});

test('Facebook Test', async ({ page }) => 
{
  await page.goto('https://www.facebook.com');  // Open Facebook website
});

test('YouTube Test', async ({ page }) => 
{
  await page.goto('https://www.youtube.com');   // Open YouTube website
});


