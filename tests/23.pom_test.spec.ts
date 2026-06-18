import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/cartpage";

test("test", async ({ page }) => 
{
    // Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("sanjeev12", "test@123");
    await page.waitForTimeout(3000);

    // Home
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotoCart();

    // Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.chechProductInCart("Nexus 6");
    expect(status).toBe(true);
    //expect(status).toBe(false);
});