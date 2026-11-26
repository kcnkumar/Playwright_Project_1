import { test, expect } from '@playwright/test';
import { jsonFileRead } from '../Generics/jsonDdt.js'

// let testData: [{ userName: string, password: string }] = jsonFileRead();
let testData: [{ userName: string, password: string }] = jsonFileRead()

for (let [index, data] of testData.entries()) {
    test(`DDT using JSON basic flow - ${data.userName ?? 'undefined'} - ${index + 1}`, async ({ page }) => {
        await page.goto("https://automationplayground.com/crm/login.html");
        await page.getByPlaceholder("Enter email").fill(data.userName);
        await page.getByPlaceholder("Password").fill(data.userName);
        await page.getByRole('button', { name: 'Submit' }).click();
        let msg = await page.locator("h2").innerText();
        await expect(msg).toBe("Our Happy Customers");
        await page.waitForTimeout(3500);
    })
}