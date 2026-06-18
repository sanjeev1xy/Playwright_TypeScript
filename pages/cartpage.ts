import { Page } from '@playwright/test';

export class CartPage 
{
    page: Page;
    noOfProducts: string;

    constructor(page: Page) 
    {
        this.page = page;
        this.noOfProducts = "//tbody/tr[1]/td[2]";
    }

    async chechProductInCart(productName: string): Promise<boolean> 
    {
        const productsInCart = await this.page.$$(this.noOfProducts);

        for (const product of productsInCart) 
        {
            console.log(await product.textContent());

            if (productName === await product.textContent()) 
            {
                return true;
            }
        }

        return false;
    }
}