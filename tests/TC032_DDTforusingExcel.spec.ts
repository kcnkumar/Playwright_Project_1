import {test, expect} from '@playwright/test'
import {readExcelSheetwise} from '../Generics/excelDdt.js'

let testData =readExcelSheetwise("LoginData");
for (let [index, data] of testData.entries()) {
    test(`${data.email}, test for Orange hrm login and logout using Excel DDT ${index + 1}`, async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        console.log(`login defailt creds \n Username : Admin \n Password : admin123`);
        await page.locator("input[name='username']").fill(data.email);
        await page.locator("input[name='password']").fill(data.password);
        await page.locator("button[type='submit']").click();
        await page.waitForTimeout(2500);
    });
}