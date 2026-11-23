import { test, expect } from '@playwright/test';

test(`perform registration using xpath operator and indexings`, async ({ page }) => {
    let emailId = 
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    // and operator
    await page.locator("//input[@name='firstname' and @class='form-control']").fill("test");
    await page.locator("//input[@name='lastname' and @class='form-control']").fill("pw");
    //Or operator
    await page.locator("//input[@name='email' or @id='input-email']").fill(`test${new Date().getTime()}@pw.com`);
    await page.locator("//input[@name='telephone' or @id='input-telephone']").fill("9876543210");
    //direct indexing
    await page.locator("(//input[@class='form-control'])[5]").fill("test123");
    //position() or also type of indexing
    await page.locator("(//input[@class='form-control'])[6]").fill("test123");
    await page.locator("(//input[@type='radio'])[position()=3]").click()
    await page.locator("//input[@type= 'checkbox']").click();
    await page.waitForTimeout(2500);
    await page.locator("//input[@value= 'Continue']").click();
    let value:string = await page.locator("//h1").last().innerText();
    console.log(await value);
    await expect(value).toBe("Your Account Has Been Created!");
    await page.waitForTimeout(2500);
    await page.locator("//a[@class= 'btn btn-primary']").click();
    let value1 = await page.locator("//h2").first().innerText();
    await expect(value1).toBe("My Account");
    await page.waitForTimeout(2500);
})