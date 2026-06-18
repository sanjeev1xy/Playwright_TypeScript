import {test,expect} from "@playwright/test";

test("Page Screenshot",async({page})=>
{
await page.goto("https://www.demoblaze.com/index.html");
await page.screenshot({ path:"screenshots/"+Date.now()+"HomePage.png"});
});

test("Full page Screenshot",async({page})=>
{
await page.goto("https://www.demoblaze.com/index.html");
await page.screenshot({ path:"screenshots/"+Date.now()+"FullPage.png",fullPage:true});
});

test.only("Element Ecreenshot",async({page})=>
{
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("(//img[@src='imgs/galaxy_s6.jpg'])[1]").screenshot({ path:"screenshots/"+Date.now()+"Samsung.png"});
});