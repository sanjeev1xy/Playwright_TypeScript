/*
Locator - Identifies the element on the page.
DOM - Document Object Model
DOM is an API Interface provided by browser.

1) page.getByAltText() to locate an element, usually image, by its text alternative.
2) page.getByText() to locate by text content.
3) page.getByRole() to locate by explicit and implicit accessibility attributes.
4) page.getByLabel() to locate a form control by associated label's text.
5) page.getByPlaceholder() to locate an input by placeholder.

6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configur

*/

import { test, expect, Locator } from "@playwright/test";

test("Verify Playwright Locators", async ({ page }) => 
{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // 1. page.getByAltText()

    // identifies images (and similar elements) based on the alt attribute.
    // Use this locator when your element supports alt text such as img and area elements.

    const logo: Locator = page.getByAltText("Practice Test Automation");
    await expect(logo).toBeVisible();

     // 2. page.getByText()

     // Find an element by the text it contains. You can match by a substring, exact string,
     // Locate by visible text
     // Use this locator to find non interactive elements like div, span, p, etc.
    // For interactive elements like button, a, input, etc. use role locators.
    /*
     <p>welcome</p>
     <div>hellow</div>
     */
     
    //const text:Locator=page.getByText("Test login");
    //await expect(text).toBeVisible();

    //await expect(page.getByText("Test login")).toBeVisible();   // full string/full text
    //await expect(page.getByText("Test log")).toBeVisible();     // provided substring/partial text
      await expect(page.getByText(/Test\s+Login/i)).toBeVisible();  //regular expression

     // 3. page.getByRole()

     //Locating by Role  ( role is not an attribute)
     //Role locators include buttons, checkboxes, headings, links, lists, tables,
     //and many more and follow W3C specifications for ARIA role.
     //Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.

     await expect(page.getByRole("heading", { name: "Test login" })).toBeVisible();

     // 4. page.getByLabel()

     //Locate form control by label's text
     // When to use: Ideal for form fields with visible labels.

     await page.getByLabel("Username").fill("student");
     await page.getByLabel("Password").fill("Password123");

    // 5. page.getByPlaceholder()

    // Finds element with a given placeholder text.
    // Best for inputs without a label but having a placeholder

    // This website does not have placeholder fields,
    // so using locator() instead

    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page).toHaveURL(/logged-in-successfully/);

    //page.getByPlaceholder("Search store").fill('Apple MacBook Pro'); //if locator available regarding placeholder 
                                                                       // in website than we can used same as 

    // 6. page.getByTitle() 

    // to locate an element by its title attribute.
    // When to use: When your element has a meaningful title attribute.

    await page.setContent(`
        <a href="/" title="Home page link">Home</a>
        <abbr title="HyperText Markup Language">HTML</abbr>`);

    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");

    // 7. page.getByTestId()

    // Locates an element based on its data-testid attribute (or another configured test ID attribute).
    // When text-based, role-based, or other locators are unstable, dynamic, or not suitable for identifying 
    // the element reliably.

    await page.setContent(`
        <div data-testid="profile-name">John Doe</div>
        <div data-testid="profile-email">john.doe@example.com</div>`);

    await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
    await expect(page.getByTestId("profile-name")).toHaveText("John Doe");
});



   
   

   
   
