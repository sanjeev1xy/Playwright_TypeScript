 import { test, expect } from '@playwright/test';

test('Playwright Assertions Demo', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    // 1. Auto-retrying assertion (automatically retries until it passes or times out)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    await expect(page.locator('text=Welcome to our store')).toBeVisible();
    await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText('Featured products');

    // 2. Non-retrying assertion (executes immediately, no retry)
    const title = await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy();

    const welcometext = await page.locator('text=Welcome to our store').textContent();
    expect(welcometext).toContain('Welcome');

    // 3. Negating matcher
    await expect(page.locator('text=Welcome to our store')).not.toBeHidden();
    expect(welcometext).not.toContain('Selenium');

    await page.waitForTimeout(5000);
});