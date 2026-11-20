import { test, expect, type Locator } from '@playwright/test'

test(`test for footer links`, async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    let allLinks: Locator[] = await page.locator("footer a").all();
    console.log(`the length of footer links => ${allLinks.length}`);
    for (let link of allLinks) {
        console.log(await link.innerText());
        if ((await link.innerText()).includes('Contact Us')) {
            await link.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})