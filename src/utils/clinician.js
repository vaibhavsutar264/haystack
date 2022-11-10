import { jsonDirectory } from '.';

const fs = require('fs');
const path = require('path');


export const getClinicianFeatures = () => {
   const filePath = jsonDirectory + '/data.json'
   if(!fs.existsSync(filePath)) {
      return false
   }
   const fileContent = fs.readFileSync(filePath)
   return JSON.parse(fileContent.toString());
}
