/*

//newContex Vs newPage
new context enables completed new browser window it never share any user session like cookie cache etc..

*/
//multi user test saucedemo.com

import { chromium , test} from "@playwright/test";

test('for browser to page', async ({})=>{

let browser = await chromium.launch({headless:false, channel:'msedge'});
let cntxt1 = await browser.newContext();
let page1 = await cntxt1.newPage();
await page1.goto('https://google.com');


let cntxt2 = await browser.newContext();

let page2= await cntxt2.newPage();
await page2.goto('https://fb.com');

let page3 = await cntxt2.newPage();
await page3.goto('https://www.automationplayground.dev/');
await page2.bringToFront();
await page2.waitForTimeout(10000);
await page2.close()
await page1.waitForTimeout(10000);
});

test(`test for browser ---> page`, async({})=>{

});