//alert(), confirm(), prompt() dialogs/JSalerts
//Reference: https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs

//1) By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.
// 2) However, you can register a dialog handler before the action that triggers the dialog to either
// dialog.accept() or dialog.dismiss() it.

import {test,expect} from "@playwright/test";


test.skip("Alert with ok",async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Dialog window handler
    page.on("dialog",async dialog=>
    {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    });
    await page.click("//button[@id='alertBtn']");
    await page.waitForTimeout(5000);
});

test.skip("confirmation Dialog-Alert with OK and cancel",async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Dialog window handler
    page.on("dialog",async dialog=>
    {
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept(); //close by using OK button
        //await dialog.dismiss(); //close by using cancel
    });
    await page.locator("//button[@id='confirmBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    await page.waitForTimeout(5000);
});

test("Prompt Dialog",async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Dialog window handler
    page.on("dialog",async dialog=>
    {
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("John");
    });
    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?");
    await page.waitForTimeout(5000);
});
    

    