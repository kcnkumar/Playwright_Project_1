import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';

test(`alert auto handle by PW`, async ({ page }) => {
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
    await page.locator("button[name='proceed']").click();
    await page.waitForTimeout(3500);
    await page.locator("input[id='login1']").fill("abcdefg");
    await page.waitForTimeout(3500);
})

test(`alert handled manually using PW`, async ({ page }) => {
    await page.on('dialog', async (alert) => {
        console.log(`the type of alert ${alert.type()}`);
        console.log(alert.message());
        await alert.accept();
    });
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
    await page.locator("button[name='proceed']").click();
    await page.locator("input[id='login1']").fill("abcdefg");
    await page.waitForTimeout(2500);
});

test(`simple alert`, async ({ page }) => {

    /* handle alert manually */
    page.on('dialog', async (alert2) => {
        console.log(`the type of alert => ${alert2.type()} and the message of aler is => ${alert2.message()}`)
        await alert2.accept();
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.getByRole("button", { name: 'Click for JS Alert' }).click();
    await expect(page.locator('#result')).toHaveText("You successfully clicked an alert");
    await page.waitForTimeout(2500);
})

test(`confirmation alert`, async ({ page }) => {
    page.on('dialog', async (alertBox) => {
        console.log(`the type of alert => ${alertBox.type()} and the message of aler is => ${alertBox.message()}`)
        await alertBox.dismiss();
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.getByRole("button", { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toHaveText("You clicked: Cancel");
    await page.waitForTimeout(2500);
});

test(`test prompt type of alert`, async ({ page }) => {
    page.on('dialog', async (promptAlert) => {
        console.log(`the type of alert => ${promptAlert.type()} and the message of aler is => ${promptAlert.message()}`)
        promptAlert.accept("hello")
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.getByRole("button", { name: 'Click for JS Prompt' }).click();
    await expect(page.locator('#result')).toHaveText("You entered: hello");
    await page.waitForTimeout(2500);
})