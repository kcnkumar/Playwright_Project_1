/*
lanching browser manually with test runner
*/

import { chromium, test } from "@playwright/test";


test('lanuch browser', async ({ }) => {

    let browser = await chromium.launch({ headless: false, channel: 'msedge' });
    let page = await browser.newPage();
    await page.goto('https://www.google.com')
    await page.waitForTimeout(2000);
})