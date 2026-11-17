
import { test } from '@playwright/test'

test('first test', async ({ page }) => {
    await page.goto("https://www.google.com");
});


test('open fb', async({page})=>{
    await page.goto('https://www.fb.com');
})