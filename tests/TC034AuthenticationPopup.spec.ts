import { test, expect, type Browser } from '@playwright/test';

test(`basic authentication using page `, async ({ page }) => {
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    console.log(await page.locator("//p").innerText);

})

test(`authenticate using context`, async ({ browser }) => {
    let context = await browser.newContext({ httpCredentials: { username: "admin", password: "admin" } })

    let page1 = await context.newPage();
    await page1.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    console.log(await page1.locator("//p").innerText);


})