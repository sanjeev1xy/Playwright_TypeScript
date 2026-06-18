import {test,expect,Locator } from "@playwright/test"

test("Autosuggest dropdown", async({page})=>
{
    await page.goto("https://www.flipkart.com/");

    await page.locator("input[name='q']").first().fill("smart"); // Search text
    await page.waitForTimeout(5000);

    // Get all the suggested options --> Ctrl+Shift+P  on DOM -->emulate focused page
    const options:Locator=page.locator("ul>li");

    const count=await options.count();
    console.log("Number of suggested options:", count); //8

    // printing all the suggested options in the console

    console.log("5 th option:", await options.nth(5).innerText());

    console.log("Printing all teh auto suggestions.....")
    for(let i=0;i<count;i++)
    {
        //console.log(await options.nth(i).innerText());
        console.log(await options.nth(i).textContent());
    }

    //select/click on the smartphone option
/*
    for(let i=0;i<count;i++)
    {
        const text=await options.nth(i).innerText();
        if(text==='smartphone')
        {
            options.nth(i).click();
            break;
        }
    }
        */

    await page.waitForTimeout(3000);


})

/*
import { test, expect, Locator } from "@playwright/test";

test("Autosuggest dropdown", async ({ page }) =>
{
    await page.goto("https://www.flipkart.com/");

    // Search text
    await page.locator("input[name='q']").first().fill("smart");

    await page.waitForTimeout(5000);

    // Get all suggested options
    const options: Locator = page.locator("ul > li");

    const count = await options.count();

    console.log("Number of suggested options:", count);

    for (let i = 0; i < count; i++)
    {
        console.log(await options.nth(i).textContent());
    }

    await page.waitForTimeout(3000);
});*/