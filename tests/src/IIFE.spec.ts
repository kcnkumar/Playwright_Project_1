import { chromium } from "@playwright/test";
import { TIMEOUT } from "node:dns";
import { timerify } from "node:perf_hooks";

(async () => {
    let browser = await chromium.launch({ headless: false, channel: "chrome" });
    let page = await browser.newPage();
    await page.goto("https://google.com");
    // await page.close();
})();