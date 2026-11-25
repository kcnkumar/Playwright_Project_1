//https://formy-project.herokuapp.com/form

import { test, expect, type Locator } from '@playwright/test'
import { scrollToElement } from './Generics/TestUtils.js'
test(`select dropdown by option`, async ({ page }) => {
    await page.goto("https://formy-project.herokuapp.com/form", { waitUntil: 'domcontentloaded', timeout: 2500 });
    await scrollToElement(page, page.getByLabel('Years of experience:'))
    let options: Locator[] = await page.getByRole('combobox', { name: 'Years of experience:' }).all();
    console.log(`The length of the options are => ${options.length}`);
    for (let option of options) {
        console.log(await option.innerText());
    }
    await page.waitForTimeout(2500);
    await page.getByRole('combobox', { name: 'Years of experience:' }).selectOption('0-1');
    await page.waitForTimeout(2500);
    await page.getByRole('combobox', { name: 'Years of experience:' }).selectOption({ value: '2' });
    await page.waitForTimeout(2500);
    await page.getByRole('combobox', { name: 'Years of experience:' }).selectOption({ index: 4 });
    await page.waitForTimeout(2500);
    await page.getByRole('combobox',{ name: 'Years of experience:' }).selectOption({label:'5-9'})
    await page.waitForTimeout(2500);
})