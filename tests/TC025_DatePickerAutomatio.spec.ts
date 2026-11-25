import { test, expect } from '@playwright/test';

test(`date pick scenario - basic`, async ({ page }) => {
    await page.goto("https://formy-project.herokuapp.com/datepicker", { waitUntil: 'domcontentloaded', timeout: 2500 });
    await page.locator('#datepicker').click();
    let expectedMonth = 'May', expectedYEar: number = 2027;
    while (true) {
        let CurrentMandY = await page.locator('th.datepicker-switch').first().innerText();
        let cMonth = CurrentMandY.split(' ')[0];
        let cYr: number = Number(CurrentMandY.split(' ')[1]);
      
        if (cMonth === expectedMonth && cYr === expectedYEar) {
            let dateLocator = page.locator("tr>td.day");
            await dateLocator.filter({ hasText: '14' }).click();
            break;
        }
        else {
            await page.locator("th.next").first().click();
        }
    }
    console.log(`this is just to learn date picker went with static mode there are btter ways to handle this or have to change it to dynamic way `);
    
    await page.waitForTimeout(3500);
})