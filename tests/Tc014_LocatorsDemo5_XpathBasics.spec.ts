import { test, expect } from "@playwright/test";

test(`login with relative Xpath basics`, async ({ page }) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.locator("//input[@name='email']").fill("test2525@gmail.com");
    await page.locator("//input[@type='password']").fill("test123");
    await page.waitForTimeout(2500);
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(2500);
    await expect(page).toHaveURL(/account/);
    await page.waitForTimeout(2500);
})