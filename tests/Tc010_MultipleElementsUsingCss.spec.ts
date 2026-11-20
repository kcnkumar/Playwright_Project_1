import { test, expect, type Locator } from '@playwright/test'

test(`test for finding multiple/List of direct/indirect elements using CSS selector`, async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    let directList: string[] = await page.locator("div.list-group> a").allInnerTexts();
    console.log(`the total options are ${directList.length}`);
    for (let options of directList) {
        console.log(options);

    }
    console.log('----------------------------------------');

    for (let i in directList) {
        console.log(directList[i]);
    }
    await page.waitForTimeout(5000);
});

test(`find all elements using all() method`, async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    let allElements: Locator[] = await page.locator("div.list-group> a").all();
    console.log(`length of all elements ${allElements.length}`);
    for (let option of allElements) {
        console.log(await option.innerText());
        if (await (await option.innerText()).includes('Forgotten Password')) {
            await await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})

