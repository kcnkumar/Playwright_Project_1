import Papa from 'papaparse'
import fs from 'fs';

export function getSingleEntry(index: number) {
    const csvFile = fs.readFileSync("TestData/sample.csv", "utf-8");
    const res = Papa.parse(csvFile, { header: true, skipEmptyLines: true });
    // for (let data of res.data) {
    //     console.log(typeof data, data['userName'] );

    // }
    return res.data[index]
}

let test: string[];