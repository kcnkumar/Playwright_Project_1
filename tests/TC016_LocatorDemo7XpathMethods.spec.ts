import { test, expect } from '@playwright/test';

test(`test for xpath methods`, async ({ page }) => {
    await page.goto("https://www.amazon.in/", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(5000);
    let continueShopping = page.getByRole('button', { name: 'Continue shopping' });
    console.log(await continueShopping.isVisible());
    if (await continueShopping?.isVisible())
        await continueShopping.click();
    else
        console.log(`${continueShopping} element is not visible`);

    await page.locator("//a[text()='Mobiles']").click();
    await page.waitForTimeout(2500);
    await page.locator("//span[normalize-space()='Cart']").last().click();
    let value = await page.locator("//h3").first().innerText();
    await expect(value).toContain("Your Amazon Cart is empty");
    let searchBox = page.locator("//input[contains(@id,'twotabsearcht')]");
    await searchBox.fill("iPhone fold");
    await searchBox.press("Enter");
    let searchstartsWith = page.locator("//input[contains(@id,'twotabsearcht')]");
    await searchstartsWith.fill("fold");
    await searchstartsWith.press("Enter");
    await page.waitForTimeout(2500);
})