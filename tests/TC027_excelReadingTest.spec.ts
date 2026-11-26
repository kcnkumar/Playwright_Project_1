import {test, expect} from '@playwright/test';
import XLSX from 'xlsx'
import { readExcelSheetwise } from '../Generics/excelFileReading.js';

test(`Read data from excel`, async({page})=>{
//    let workBook= XLSX.readFile("TestData/sampleExcel.xlsx");
//    let sheet2 = workBook.Sheets["LoginData"];
// console.log(workBook.SheetNames)
//    if (!sheet2) {
//      console.log('Sheet "LoginData" not found');
//    }
//    let jsonData = XLSX.utils.sheet_to_json(sheet2);
let jsonData = readExcelSheetwise("LoginData")
   console.log(`Excel Login Data => ${jsonData}`);
   console.log(jsonData[0].password);
})