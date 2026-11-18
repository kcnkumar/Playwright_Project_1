import { test, expect } from '@playwright/test';


test('Login page with different css selectors #for id and .for class', async ({ page }) => {

    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    await page.locator('#input-email').fill('test2525@gmail.com');
    await page.locator("input[name='password']").fill('test123');
    // await page.locator("input.btn.btn-primary").click();

    // in CSS selector we can use combinations as well
    await page.locator("input.btn.btn-primary[type='submit']").click();
    //assertion
    await expect(page).toHaveTitle('My Account');
    await expect(page).toHaveURL(/account/);


    await page.waitForTimeout(10000);
})

//<button type="submit" class="a-button-text" alt="Continue shopping">Continue shopping</button>