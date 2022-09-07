import { jsonDirectory } from '.';

const fs = require('fs');
const path = require('path');

export function getSettings() {
   const filePath = jsonDirectory + '/settings.json'
   if (!fs.existsSync(filePath)) {
      return {}
   }
   const fileContent = fs.readFileSync(filePath)
   return JSON.parse(fileContent.toString());
}

export function saveSettings() {
   const filePath = jsonDirectory + '/settings.json'
   const fileContent = fs.readFileSync(filePath)
   return JSON.parse(fileContent.toString());
}
