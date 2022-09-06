const fs = require('fs');
const path = require('path');

const jsonDirectory = path.join(process.cwd(), 'json');

export const getCategoryFiles = () => {
   let categories = []
   //passsing directoryPath and callback function
   // fs.readdirSync
   const fileNames = fs.readdirSync(jsonDirectory + '/categories');
   if(!fs.existsSync(fileNames)) {
      return categories
   }
   fileNames.map(fname => {
      categories.push({
         id: fname,
         title: fname,
         file: fname,
         slug: fname.replace('.json', ''),
      })
   })
   return categories
}

export const getAllCategories = () => {
   let categories = []
   const cats = getCategoryFiles()
   cats?.map(catItem => {
      const cat = getCategoryFile(catItem.slug)
      categories.push({
         ...catItem,
         ...cat
      })
   })
   return categories
}

export const getCategoryFile = (fileName) => {
   const filePath = jsonDirectory + '/categories/' + fileName + '.json'
   if(!fs.existsSync(filePath)) {
      return false
   }
   const fileContent = fs.readFileSync(filePath)
   return JSON.parse(fileContent.toString());
}
