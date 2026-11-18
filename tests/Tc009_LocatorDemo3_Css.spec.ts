import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';

test('test to check partial text / Substring methods using CSS selectors', async ({ page }) => {
    await page.goto('https://www.amazon.in');
    let continueShopping = await page.locator("button[type='submit']");
    if (await continueShopping.visible() && await continueShopping.isEnabled())
        await continueShopping.click();
    else
        console.log(`${continueShopping} element is not visible`);

    await page.locator("input#twotabsearchtextbox").fill('bags');
    //this will auto clear previously entered text
    let searchElement: Locator = await page.locator("input[id*= 'searchtext']");
    await searchElement.fill('watch');
    await page.waitForTimeout(2000);
    await searchElement.press('Enter');

    console.log('search with prefix using ^ sign')
    let prefSearch:Locator = page.locator("input[id^= 'twotabsearch']");
    prefSearch.fill('Mobile');
    await page.waitForTimeout(2000);
    await prefSearch.press('Enter');

    console.log(`this is to search with suffix using $ sign`);
    let sufSearch:Locator = page.locator("input[id$= 'searchtextbox']");
    sufSearch.fill('PS5');
    await sufSearch.waitFor({ timeout: 5000 });
    await sufSearch.press('Enter');

    await page.waitForTimeout(10000);
})