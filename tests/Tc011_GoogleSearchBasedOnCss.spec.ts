import { test } from "@playwright/test";

//practice
test(`verify list of search elements in google`, async ({ page }) => {
    await page.goto('https://google.com');
    await page.waitForTimeout(2000);
    let pop = page.locator("//div[@role='button']/div//span[contains(text(),'Don')]");
    if (await pop.isVisible())
        await pop.click();
    await page.locator("textarea[aria-label= 'Search']").fill('Playwright');
    await page.waitForTimeout(5000);

    let allSearchEl = await page.locator("div.OBMEnb> ul.G43f7e> li").all()

    console.log(`current search list = ${allSearchEl.length}`);
    for (let opt of allSearchEl) {
        console.log(opt);
        console.log('\n\n')
        console.log(await opt.innerText());
        if ((await opt.innerText()).includes('playwright automation')) {
            await opt.click();
            break;
        }
    }
    await page.waitForTimeout(5000);

})