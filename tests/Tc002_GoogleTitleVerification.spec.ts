import { expect, test } from '@playwright/test'

test('Google Page title verification', async ({ page }) => {
    await page.goto('https://google.com', { waitUntil: 'domcontentloaded', timeout: 10000 })
    let title = await page.title();

    //assertion
    // hard and soft, by default it's hard assertion

    //variable assertions doesn't have any default wait time by PW 
    expect(title).toBe('Google');

    //default PW assertion have wait time of 5 second
    expect.soft(await (await page.title()).includes('google'));
    await expect(page).toHaveTitle('Google');
    await expect(page).toHaveURL(/google.com/);

    await page.waitForTimeout(15000);
})