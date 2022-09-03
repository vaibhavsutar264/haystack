const fs = require('fs');
const path = require('path');

export const getPostFiles = () => {
   const directoryPath = path.join(__dirname, '../../../../database/content/posts');
   let posts = []
   //passsing directoryPath and callback function
   // fs.readdirSync
   const fileNames = fs.readdirSync(directoryPath);
   fileNames.map(fname => {
      posts.push({
         id: fname,
         title: fname,
         file: fname,
      })
   })
   return posts
}

export const getPostFile = (fileName) => {
   const filePath = path.resolve(__dirname, '../../../../database/content/posts/' + fileName)
   const fileContent = fs.readFileSync(filePath)
   return fileContent;
}
