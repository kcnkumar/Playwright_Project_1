import { test } from '@playwright/test';
import fs from 'fs';
import { jsonFileRead } from '../Generics/jsonFileReading.js';
test(`reading data from json basics`, async ({ page }) => {
    // let data = JSON.parse(fs.readFileSync("TestData/crm.json", "utf-8"));
    // console.log(data);
let data = jsonFileRead(0)
    console.log(data.email);
})