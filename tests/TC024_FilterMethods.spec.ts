import { test, expect, type Locator } from '@playwright/test';

test(`Test for footers link`, async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?", { waitUntil: 'domcontentloaded', timeout: 2500 });
    let footerLinks: Locator[] = await page.locator('footer a').all();
    console.log(`length of links => ${footerLinks}`);
    for (let link of footerLinks) {
        console.log(`all links ${await link.innerText()}`);
        if ((await link.innerText()).includes('Brands')) {
            await link.click();
            break;
        }
    }
    await page.waitForTimeout(3500);
});

test(`test the footerlinks with filter method`, async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?", { waitUntil: 'domcontentloaded', timeout: 2500 });
    let footerLinks = page.locator('footer a');
    console.log(`the count of all footers are ${await footerLinks.count()}`);
    footerLinks.filter({hasText:'Brands'}).click()
    await page.waitForTimeout(3500);

    console.log(`similar filter we can apply for search as well like amazon...`);
    
})

