import { test, expect } from '@playwright/test';
import Papa from 'papaparse';
import fs from 'fs';
import { getSingleEntry } from '../Generics/csvFile.js';

test(`basic way to read csv`, async ({ page }) => {

    // const csvFile = fs.readFileSync("TestData/sample.csv", "utf-8");
    // const res = Papa.parse(csvFile, { header: true, skipEmptyLines: true });
    // for (let data of res.data) {
    //     console.log(typeof data, data['userName'] );

    // }

    console.log(getSingleEntry(0)?.userName)
})