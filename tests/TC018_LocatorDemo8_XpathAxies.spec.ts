import { test, expect } from '@playwright/test';

test(`test for axies`, async ({ page }) => {
    await page.goto("https://automationplayground.com/crm/customers.html?email-name=test%40gmail.com&password-name=test123&submit-name=");
    //using highlight to reference purpose only this is recommended to use only debug not to prod...
    await page.locator("//td[text()= 'John']//ancestor::tbody").highlight(); // ancestor 
    await page.waitForTimeout(1500);
    await page.locator("//td[text()= 'John']//parent::tr").highlight(); // access parent
    await page.waitForTimeout(1500);
    let childLocator = await page.locator("//table[@id='customers']/tbody/tr[3]//child::td");
    console.log(`the total childs are TR 3 => ${await childLocator.count()}`);
    await page.waitForTimeout(1500);
    //identify total rows afer John row -  using of following
    await page.locator("//td[text()= 'John']//following::tr").highlight();
    await page.waitForTimeout(1500);
    //identify the preceding or previous TR before John
    await page.locator("//td[text()= 'John']//preceding::tr").highlight();
    await page.waitForTimeout(1500);
    let pSiblingCount:number= await page.locator("//td[text()= 'John']//preceding-sibling::td").count();
    console.log(`this preceding-sibling of td john count is => ${pSiblingCount}`);
    
    //prceeding siblings
    // await page.waitForTimeout(1500);
    await page.waitForTimeout(2500);
})