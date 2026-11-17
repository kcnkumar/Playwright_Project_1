/*
launch through mobile we browser
uncomment respective device on playwright config settings
*/


import { test } from '@playwright/test'

test(`test on mobile device`, async({page})=>{
    await page.goto('https://saucedemo.com', {waitUntil:'domcontentloaded'});
    await page.reload();
    await page.waitForTimeout(10000);
    
})
