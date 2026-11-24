import { test, expect } from '@playwright/test';
import { get } from 'http';

test(`test to check inbuilt locators - getbyrole `, async ({ page }) => {
    await page.goto("https://automationplayground.com/crm/");
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Enter email' }).fill('test@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('test');
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(2500);
})

test.only(`other inbuilt locators verfication`, async ({ page }) => {
    await page.goto("https://www.amazon.in/", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(5000);
    let continueShopping = page.getByRole('button', { name: 'Continue shopping' });
    console.log(await continueShopping.isVisible());
    if (await continueShopping?.isVisible())
        await continueShopping.click();
    else
        console.log(`${continueShopping} element is not visible`);


    //getByText
    await page.getByText("Update location").highlight();

    // getByRole
    await page.getByRole('link', { name: 'Mobiles' }).highlight();
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Mobiles' }).click
    //getByTitle

    // getByPlaceHolder

    //getByAltText
    await page.getByAltText("1").first().click();
    await page.waitForTimeout(5000);
    //getByTestId

    //getByLabel
    await page.locator("").scrollIntoViewIfNeeded();
    await page.getByLabel("Search Amazon.in").fill("");
    await page.waitForTimeout(1500);
})