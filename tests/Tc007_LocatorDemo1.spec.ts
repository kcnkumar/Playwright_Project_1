
import { test, expect } from '@playwright/test'


test(`google search scenario`, async ({ page }) => {
    await page.goto('https://google.com');
    await page.waitForTimeout(2000);
    let pop = page.locator("//div[@role='button']/div//span[contains(text(),'Don')]");
    if (await pop.isVisible())
        await pop.click();
    let searchBox = page.locator('textarea#ti6dpd');
    console.log(await searchBox.isVisible());
    console.log(await searchBox.isEnabled());
    console.log(await searchBox.isEditable());

    await searchBox.fill('playwright');
    await page.waitForTimeout(5000);
    await page.locator('#ti6dpd').fill('this is Playwrightdev');
    await page.waitForTimeout(15000);
}) 