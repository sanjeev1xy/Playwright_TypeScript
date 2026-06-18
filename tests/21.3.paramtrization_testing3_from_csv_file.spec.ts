// one folder is created testdata and paste the one file i.e. data.csv from external not in this project 

// By Default there is no support csv in TypeScript ,JavaScript so we have to install third party library for csv and go to the terminalr and run the command,command is npm install csv-parse

/*
Install the csv-parse module to read CSV files:
    npm install csv-parse
*/

import { test, expect } from '@playwright/test';   // Import Playwright test and assertion methods
import fs from 'fs';                               // Import File System module
import {parse} from 'csv-parse/sync';              // Import CSV parser library

//Reading data from csv
const csvPath='testdata/data.csv';                 // Path of CSV file
const fileContent=fs.readFileSync(csvPath,'utf-8'); // Read CSV file content as string

const records=parse(fileContent,                  // Parse CSV content into JavaScript objects
                    {
                        columns:true,             // Use first row as column headers
                        skip_empty_lines:true     // Ignore blank lines in CSV file
                    }
                )

//main test
test.describe('Login data driven test', async()=> { // Create test suite for Data Driven Testing

for (const data of records as {email: string; password: string; validity: string}[]) { // Loop through each CSV record

    test(`Login test with email: "${data.email}" and password: "${data.password}"`, async ({ page }) => { // Create separate test for each row

        await page.goto('https://demowebshop.tricentis.com/login'); // Navigate to login page

        // Fill login form
        await page.locator('#Email').fill(data.email); // Enter email from CSV file
        await page.locator('#Password').fill(data.password); // Enter password from CSV file
        await page.locator('input[value="Log in"]').click(); // Click Login button

        if (data.validity.toLowerCase() === 'valid') { // Check whether credentials are valid

            // Assert logout link is visible - indicates successful login
            const logoutLink = page.locator('a[href="/logout"]'); // Locate Logout link
            await expect(logoutLink).toBeVisible({ timeout: 5000 }); // Verify successful login

        } else { // Execute when credentials are invalid

            // Assert error message is visible
            const errorMessage = page.locator('.validation-summary-errors'); // Locate validation error message
            await expect(errorMessage).toBeVisible({ timeout: 5000 }); // Verify error message is displayed

            // Assert user is still on the login page
            await expect(page).toHaveURL('https://demowebshop.tricentis.com/login'); // Verify user remains on login page
        }
    });
}

});