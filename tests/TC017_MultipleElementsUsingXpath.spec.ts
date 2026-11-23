import { test, expect, type Locator } from '@playwright/test';

test(`search google with xpath`, async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    let pop = page.locator("//div[@role='button']/div//span[contains(text(),'Don')]");
    if (await pop.isVisible())
        await pop.click();
    await page.locator("//textarea[@id='ti6dpd']").press('Space');
    await page.locator("//textarea[@id='ti6dpd']").fill("Plawright jobs");
    await page.waitForTimeout(2000);
    let resultOptions: Locator[] = await page.locator("//ul[@class= 'G43f7e']/li//div[@class= 'wM6W7d']/span").all();
    console.log(resultOptions.length);
    for (let res of resultOptions) {
        console.log(await res.innerText());
        if ((await res.innerText()).includes('remote')) {
            await res.click();
            break;
        }
    }
    await page.waitForTimeout(2500);
})