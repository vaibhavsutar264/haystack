const fs = require('fs');
const path = require('path');

const jsonDirectory = path.join(process.cwd(), 'json');

export const getPostFiles = () => {
   let posts = []
   //passsing directoryPath and callback function
   // fs.readdirSync
   const fileNames = fs.readdirSync(jsonDirectory + '/posts');
   fileNames.map(fname => {
      posts.push({
         id: fname,
         title: fname,
         file: fname,
         slug: fname.replace('.json', ''),
      })
   })
   return posts
}

export const getPostFile = (fileName) => {
   const filePath = jsonDirectory + '/posts/' + fileName + '.json'
   const fileContent = fs.readFileSync(filePath)
   return JSON.parse(fileContent.toString());
}
