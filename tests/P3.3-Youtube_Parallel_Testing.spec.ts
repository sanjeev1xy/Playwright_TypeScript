import { test , expect } from '@playwright/test';

test('YouTube Test', async ({ page }) => 
{
    await page.goto('https://www.youtube.com');
});