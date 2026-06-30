import {test,expect} from '@playwright/test';

test("Cross Browser Test", async ({page}) => 
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
});