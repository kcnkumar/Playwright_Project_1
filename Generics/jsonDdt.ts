import fs from 'fs'
import * as path from 'path';

const filePath: string = path.resolve(process.cwd(), 'TestData', 'sampleExcel.xlsx');

export function jsonFileRead() {
    
    let data = JSON.parse(fs.readFileSync("TestData/crm.json", "utf-8"));
    // console.log(data);
    return data;
}