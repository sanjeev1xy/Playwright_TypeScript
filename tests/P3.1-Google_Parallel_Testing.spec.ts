import { test, expect } from '@playwright/test';

test('Google Test', async ({ page }) => 
{
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});

/*Your configuration in playwrightConfig.config.js
workers: 3,
fullyParallel: false,

| Worker   | Test File                              |
| -------- | -------------------------------------- |
| Worker 1 | P3.1-Google_Parallel_Testing.spec.js   |
| Worker 2 | P3.2-Facebook_Parallel_Testing.spec.js |
| Worker 3 | P3.3-Youtube_Parallel_Testing.spec.js  |
*/





