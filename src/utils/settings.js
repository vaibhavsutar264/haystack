const fs = require('fs');
const path = require('path');

const jsonDirectory = path.join(process.cwd(), 'json');

export function getSettings() {
   const filePath = jsonDirectory + '/settings.json'
   const fileContent = fs.readFileSync(filePath)
   return JSON.parse(fileContent.toString());
}

export function saveSettings() {
   const filePath = jsonDirectory + '/settings.json'
   const fileContent = fs.readFileSync(filePath)
   return JSON.parse(fileContent.toString());
}
