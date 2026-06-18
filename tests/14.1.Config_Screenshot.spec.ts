/*if you are using
----------------
a. screenshot: 'on' from playwright.config.ts file  
b. screenshot: 'on-first-failure' from playwright.config.ts file
c. screenshot: 'only-on-failure' from playwright.config.ts file
d. screenshot: 'off' from playwright.config.ts file

If you are choosing anyone in playwright.config.js then screenshot file is saving in this file i.e. 'test.results' folder.
*/
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => 
{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("id=login2").click();
    await page.locator("#loginusername").fill("sanjeev12");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
});

