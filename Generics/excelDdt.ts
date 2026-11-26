import XLSX from 'xlsx';

export function readExcelSheetwise(sheetName:string){
let workBook= XLSX.readFile("TestData/sampleExcel.xlsx");
   let sheet2 = workBook.Sheets[sheetName];
console.log(workBook.SheetNames)
   if (!sheet2) {
     console.log('Sheet "LoginData" not found');
   }
   // console.log(XLSX.utils.sheet_to_json(sheet2))
   return  XLSX.utils.sheet_to_json(sheet2);
}