import { test, expect } from '@playwright/test';

let testData = [
    { userName: 'test111@gmail.com', password: 'test123' },
    { userName: 'test222@gmail.com', password: 'test123' },
    { userName: 'test333@gmail.com', password: 'test123' }
]

for (let data of testData) {
    test(`this is basic of data driven test with Array email => ${data.userName}`, async ({ page }) => {
        await page.goto("https://automationplayground.com/crm/login.html");
        await page.getByPlaceholder("Enter email").fill(data.userName);
        await page.getByPlaceholder("Password").fill(data.userName);
        await page.getByRole('button', { name: 'Submit' }).click();
        let msg = await page.locator("h2").innerText();
        await expect(msg).toBe("Our Happy Customers");
        await page.waitForTimeout(3500);

    });
}