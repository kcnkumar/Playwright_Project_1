import { test, expect, type Locator, type Page } from '@playwright/test'


export async function scrollDown(page: Page): Promise<void> {
    console.log(`-------------Document height---------------- ${document.body.scrollHeight}`)
    await page.waitForTimeout(2500);
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight)
    });
    await page.waitForTimeout(2500);
};

export async function scrollup(page: Page): Promise<void> {
    console.log(`-------------Document height---------------- ${document.body.scrollHeight}`)
    await page.waitForTimeout(2500);
    await page.evaluate(() => {
        window.scrollTo(document.body.scrollHeight, 0);
    });
    await page.waitForTimeout(2500);
};

export async function scrollToElement(page: Page, element: Locator): Promise<void> {
    console.log(`----------------------------- ${await element.isVisible()}`)
    await element.scrollIntoViewIfNeeded();
    await element.highlight();
}