//rdbus.com
//jqueryscript.net/demo/Drop-Down-Combo-Tree/

import { test, type Locator } from '@playwright/test';

test(`automate dynamic selections or bootsrap selections using RedBus`, async ({ page }) => {
    await page.goto("https://www.redbus.in/", { waitUntil: 'domcontentloaded', timeout: 2500 });
    await page.getByRole('combobox', { name: 'From' }).fill('Bengaluru');
    await page.waitForTimeout(2500);
});

test.only(`multi select `, async ({ page }) => {
    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/", { waitUntil: 'domcontentloaded', timeout: 2500 });
    await page.getByRole('textbox', { name: '' }).first().click();
    const el: Locator[] = await page.locator("//input[@placeHolder='Type to filter'][1]//following::ul/li").all();
    console.log(`the total count of elements are => ${await el.length}`);
    for (let e of el) {
        console.log(await e.innerText());
        if ((await e.innerText()).includes('/choice 1  /')) {
             await e.first().highlight();
            await e.first().click();
            break;
        }
    }
    await page.waitForTimeout(3500);
})