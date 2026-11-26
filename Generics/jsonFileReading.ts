import fs from 'fs'

export function jsonFileRead(rowNumber:number = 0) {
    let data = JSON.parse(fs.readFileSync("TestData/crm.json", "utf-8"));
    return data[rowNumber];
}