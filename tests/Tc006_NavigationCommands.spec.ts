import { test, expect } from '@playwright/test';

test(`test navigation buttons`, async ({ page }) => {

    await page.goto('https://google.com');
    await page.waitForTimeout(5000);
    //nav to different page
    await page.goto('https://fb.com');
    await page.waitForTimeout(5000);

    await page.goBack();
    expect(page).toHaveURL(/google.com/);
    await page.waitForTimeout(5000);
});