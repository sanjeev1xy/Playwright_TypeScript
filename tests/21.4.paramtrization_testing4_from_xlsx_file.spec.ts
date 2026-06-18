// one folder is created testdata and paste the one file i.e. data.csv from external not in this project 

// By Default there is no support csv in TypeScript ,JavaScript so we have to install third party library for csv and go to the terminalr and run the command,command is npm install csv-parse

//By Default there is no support xlsx in TypeScript ,JavaScript so we have to install third party library for xlsx and go to the terminal and run the command, command is npm install xlsx


/*
Pre-requisite:  Install the xlsx Library
    npm install xlsx

*/
import { test, expect } from '@playwright/test';      // Import Playwright test and assertion methods
import * as XLSX from 'xlsx';                         // Import XLSX library to read Excel files

// Load Excel file
const excelPath = 'testdata/data.xlsx';              // Store Excel file path
const workbook = XLSX.readFile(excelPath);           // Read Excel file and create workbook object

const sheetName = workbook.SheetNames[0];            // Get first sheet name from workbook
const worksheet = workbook.Sheets[sheetName];        // Access worksheet using sheet name

// Convert Excel sheet to JSON
const loginData: any[] = XLSX.utils.sheet_to_json(worksheet); // Convert Excel rows into JSON array

// Main Test
test.describe('Login data driven test', () =>       // Create test suite
{
    loginData.forEach((data, index) =>              // Loop through every row of Excel data
    {
        const email = data.email ?? '';              // Read email value, use empty string if null/undefined
        const password = data.password ?? '';        // Read password value, use empty string if null/undefined
        const validity = data.validity ?? '';        // Read validity value, use empty string if null/undefined

        test(`Login test ${index + 1} with email: "${email}" and password: "${password}"`, async ({ page }) =>  // Create one test for each Excel row
        {
            await page.goto('https://demowebshop.tricentis.com/login'); // Open login page

            await page.locator('#Email').fill(email); // Enter email into Email textbox
            await page.locator('#Password').fill(password); // Enter password into Password textbox
            await page.locator('input[value="Log in"]').click(); // Click Login button

            if (validity.toLowerCase() === 'valid')  // Check whether test data is valid
            {
                const logoutLink = page.locator('a[href="/logout"]'); // Locate Logout link
                await expect(logoutLink).toBeVisible({ timeout: 5000 }); // Verify successful login

            } 
            else                                  // Execute for invalid login data
            {
                const errorMessage = page.locator('.validation-summary-errors'); // Locate error message
                await expect(errorMessage).toBeVisible({ timeout: 5000 }); // Verify error message is displayed

                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login' // Verify user remains on login page
                );
            }
        });
    });
});