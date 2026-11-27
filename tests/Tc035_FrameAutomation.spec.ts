import { test, expect, type Frame } from '@playwright/test';

test(`basic frame handling`, async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame1 = page.frameLocator("frame[src='frame_1.html']");
    await frame1?.locator("input[name='mytext1']").fill("hello");
    await page.waitForTimeout(2500);

})

test(`multi frames`, async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame1 = page.frameLocator("frame[src='frame_3.html']");
    await frame1.locator("input[name='mytext3']").fill('fgsfhdgihugue');
    const insideFrame = frame1.frameLocator("//iframe");
    await insideFrame.getByRole('radio', { name: 'I am a human' }).check();
    await insideFrame.getByRole('checkbox', { name: 'Form Autofilling' }).check();
    await insideFrame.getByRole('button', { name: 'Next' }).click();

    await page.waitForTimeout(2500);

});

test(`Nested frames https://selectorshub.com/iframe-scenario/ `, async ({ page }) => {
    await page.goto("https://selectorshub.com/iframe-scenario/");
    let allFrames: Frame[] = page.frames()
    console.log(allFrames.length);
    for (let frame of allFrames) {
        console.log(`${frame.name()} and ${frame.url()}`);
    }
    await page.waitForTimeout(2500);
})