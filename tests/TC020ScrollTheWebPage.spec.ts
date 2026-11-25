import { test, expect } from '@playwright/test';
import { scrollDown, scrollToElement, scrollup } from '../Generics/TestUtils.js';

test(`test the generics version of scroll functionality`, async ({ page }) => {
    await page.goto("https://www.amazon.in/", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3500);
    let continueShopping = page.getByRole('button', { name: 'Continue shopping' });
    console.log(await continueShopping.isVisible());
    if (await continueShopping?.isVisible())
        await continueShopping.click();
    else
        console.log(`${continueShopping} element is not visible`);
    // await scrollDown(page);
    // await scrollup(page);
    
    await page.waitForTimeout(3500)
    const bestsellingLink = await page.getByRole('link', { name: /Sign in/ }).last();;
    // await scrollToElement(page, page.getByRole('link', { name: '/Bestselling/' }).last());
    await scrollToElement(page,bestsellingLink);
    await page.waitForTimeout(3500);
})

