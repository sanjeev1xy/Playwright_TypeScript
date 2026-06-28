import{test,expect} from "@playwright/test";

test("verify page title",async({page})=>
{
    await page.goto("http://www.automationpractice.pl/index.php");
    let title:string=await page.title();
    console.log("title: ",title);
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle("My Shop");
})