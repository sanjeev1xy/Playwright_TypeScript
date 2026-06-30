import { test, expect } from '@playwright/test';

test('Handle All Dialogs', async ({ page }) => 
{
    test.setTimeout(60000);                                            // Increase timeout to 60 seconds

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // Handle Alert Dialog
    page.once('dialog', async dialog => 
    {
        console.log("Alert Message : " + dialog.message());
        await page.waitForTimeout(5000);
        await dialog.accept();
    });

    await page.locator("button[onclick='jsAlert()']").click();
    await page.waitForTimeout(5000);

    // Handle Confirm Dialog
    page.once('dialog', async dialog => 
    {
        console.log("Confirm Message : " + dialog.message());
        await page.waitForTimeout(5000);
        //await dialog.accept();                                          // Clicks the OK button. 
          await dialog.dismiss();                                        // if you want Cancel
    });

    await page.locator("button[onclick='jsConfirm()']").click();
    await page.waitForTimeout(5000);

    // Handle Prompt Dialog
    page.once('dialog', async dialog => 
    {
        console.log("Prompt Message : " + dialog.message());
        await page.waitForTimeout(5000);
        await dialog.accept("Sanjeev");                                // Enters the text "Sanjeev" into a Prompt dialog and clicks OK.
    });

    await page.locator("button[onclick='jsPrompt()']").click();
    await page.waitForTimeout(5000);

    await page.close();

});


// BeforeUnload Dialog Example

/*
test('Handle BeforeUnload Dialog', async ({ page }) => 
{
    // Open the page
    await page.goto("https://the-internet.herokuapp.com/typos");

    // Handle the BeforeUnload dialog
    page.on('dialog', async dialog => 
    {
        console.log("Dialog Type : " + dialog.type());   // beforeunload
        console.log("Message : " + dialog.message());
        await page.waitForTimeout(5000);

        await dialog.dismiss();  // Click Cancel (Stay on page)
        // await dialog.accept(); // Click OK (Leave page)
    });
    await page.waitForTimeout(8000);
    // Trigger the BeforeUnload dialog
    await page.close({ runBeforeUnload: true });
});
*/