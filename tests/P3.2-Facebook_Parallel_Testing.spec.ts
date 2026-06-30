import { test , expect } from '@playwright/test';

test('Facebook Test', async ({ page }) => 
{
    await page.goto('https://www.facebook.com');
});
