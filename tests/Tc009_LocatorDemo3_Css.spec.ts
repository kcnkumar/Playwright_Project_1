import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';

test('test to check partial text / Substring methods using CSS selectors', async ({ page }) => {
    await page.goto('https://www.amazon.in');
    let continueShopping = await page.locator("button[type='submit']");
    if (await continueShopping.visible())
        await continueShopping.click();

    await page.locator("input#twotabsearchtextbox").fill('bags');
    //this will auto clear previously entered text
    let searchElement: Locator = await page.locator("input[id*= 'searchtext']");
    await searchElement.fill('watch');
    await page.waitForTimeout(5000);
    await searchElement.press('Enter');
    ///html/body/div/div[1]/div[3]/div/div/form/div/div/span/span/button
    await page.waitForTimeout(10000);
})