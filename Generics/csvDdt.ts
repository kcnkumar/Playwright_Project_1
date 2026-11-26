import Papa from 'papaparse'
import fs from 'fs';

export function getSingleEntry(index?: number): { userName: string, password: string }[] {

    const csvFile = fs.readFileSync("TestData/sample.csv", "utf-8");
    const res = Papa.parse(csvFile, { header: true, skipEmptyLines: true });
    if (index)
        return res.data[index] as [{ userName: string, password: string }]
    else
        return res.data as [{ userName: string, password: string }]
}