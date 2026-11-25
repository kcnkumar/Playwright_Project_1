//https://www.letskodeit.com/practice

/*
some of the actions on hidden and disabled elements
*/

import { test, expect, type Locator } from '@playwright/test'

test(`action on hidden and disabled elements,achieve using Java script `, async ({ page }) => {
    await page.goto("https://www.letskodeit.com/practice", { waitUntil: 'domcontentloaded', timeout: 2500 });

    console.log(`Enabled/Disabled Field`);
    let enableDisabled: Locator = await page.getByPlaceholder('Enabled/Disabled Field');
    await page.locator('#disabled-button').click();
    console.log(`check the element is Enabled => ${await enableDisabled.isEnabled()}`);
    await page.evaluate(() => {
        const el = document.querySelector('#enabled-example-input') as HTMLInputElement;
        el.value = 'Hello this is disabled element'
    })
    await page.waitForTimeout(2500);
    const hidEl: Locator = await page.locator(".inputs displayed-class");
    console.log(`check the element is showing => ${await hidEl.isVisible()}`);
    await page.locator('#hide-textbox').click();
    await page.evaluate(() => {
        const el = document.querySelector("#displayed-text") as HTMLInputElement;
        el.value = 'this is hidden element';
    })
    console.log(`check the element is showing => ${await hidEl.isVisible()}`);
    await page.locator('#show-textbox').click();
    await page.waitForTimeout(2500);
});