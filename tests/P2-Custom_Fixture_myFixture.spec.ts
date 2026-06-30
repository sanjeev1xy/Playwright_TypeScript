import { test as base, expect, Page } from "@playwright/test";

type MyFixtures = 
{
    homePage: Page;
};

const test = base.extend<MyFixtures>
({
    homePage: async ({ page }, use) => 
    {
        await page.goto("https://playwright.dev/");
        await use(page);
    }
});
test("Custom Fixture Example", async ({ homePage }) => 
{
    await expect(homePage).toHaveTitle(/Playwright/);
});