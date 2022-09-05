const fs = require('fs');
const path = require('path');

const jsonDirectory = path.join(process.cwd(), 'json');

export const getNewsFiles = () => {
   let news = []
   //passsing directoryPath and callback function
   // fs.readdirSync
   const fileNames = fs.readdirSync(jsonDirectory + '/news');
   fileNames.map(fname => {
      news.push({
         id: fname,
         title: fname,
         file: fname,
         slug: fname.replace('.json', ''),
      })
   })
   return news
}

export const getActiveNews = () => {
   let news = []
   const cats = getNewsFiles()
   cats?.map(catItem => {
      const cat = getNewsFile(catItem.slug)
      if (cat && cat.status.includes('active')) {
         news.push({
            ...catItem,
            ...cat
         })
      }
   })
   return news
}

export const getNewsFile = (fileName) => {
   const filePath = jsonDirectory + '/news/' + fileName + '.json'
   const fileContent = fs.readFileSync(filePath)
   return JSON.parse(fileContent.toString());
}
