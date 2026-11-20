import { test, expect, type Locator, type Page } from '@playwright/test';

test('test for CSS indexing', async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await wait(2500, page);
    await page.locator("div.list-group>a:nth-child(4)").click();
    await waits(5000, page);
});




test.only(`test for Orange hrm login and logout`, async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(`login defailt creds \n Username : Admin \n Password : admin123`);
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await wait(2500, page);

    console.log(`logout from hrm app `);
    await page.locator("i.oxd-userdropdown-icon").click()
    await waits(2500, page)
    await page.locator("ul.oxd-dropdown-menu>li:nth-child(4)>a").click()
    await waits(2500, page)
    await expect(page).toHaveURL(/login/);
    await wait(2500, page);
})




async function wait(x: number, page: Page) {
    await page.waitForTimeout(x);
}
let waits = async (x: number, page: Page) => {
    await page.waitForTimeout(x);
}