// one folder is created testdata and paste the one file i.e. data.json from external not in this project 

import { test, expect } from '@playwright/test';   // Import Playwright test and assertion methods
import fs from 'fs';                               // Import File System module

//Reading data from json
const jsonPath="testdata/data.json";               // Copy Relative Path i.e. JSON file path
const loginData:any=JSON.parse(fs.readFileSync(jsonPath,'utf-8')); // Read and parse JSON data

//main test
test.describe('Login data driven test', async()=>  // Test suite for Data Driven Login Testing
{
   for (const { email, password, validity } of loginData)  // Loop through each JSON record
   {
        test(`Login test with email: "${email}" and password: "${password}"`, async ({ page }) =>  // Create test dynamically for each data set
        {
            await page.goto('https://demowebshop.tricentis.com/login'); // Open login page

            // Fill login form
            await page.locator('#Email').fill(email); // Enter email
            await page.locator('#Password').fill(password); // Enter password
            await page.locator('input[value="Log in"]').click(); // Click Login button

            if (validity.toLowerCase() === 'valid') { // Check if test data is valid

                // Assert logout link is visible - indicates successful login
                const logoutLink = page.locator('a[href="/logout"]'); // Locate Logout link
                await expect(logoutLink).toBeVisible({ timeout: 5000 }); // Verify successful login

            } else { // Execute when credentials are invalid

                // Assert error message is visible
                const errorMessage = page.locator('.validation-summary-errors'); // Locate error message
                await expect(errorMessage).toBeVisible({ timeout: 5000 }); // Verify error message is displayed

                // Assert user is still on the login page
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login'); // Verify user remains on login page

            }
        });
    }

});