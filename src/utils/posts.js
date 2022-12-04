import { jsonDirectory } from '.';

const fs = require('fs');
const path = require('path');

export const getPostFiles = () => {
   let posts = []
   //passsing directoryPath and callback function
   // fs.readdirSync
   const fileNames = fs.readdirSync(jsonDirectory + '/posts');
   if(!fs.existsSync(jsonDirectory + '/posts')) {
      return posts
   }
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

export const getAllPosts = () => {
   let posts = []
   const cats = getPostFiles()
   cats?.map(catItem => {
      const cat = getPostFile(catItem.slug)
      posts.push({
         ...catItem,
         ...cat
      })
   })
   return posts
}

export const getActivePosts = () => {
   let posts = []
   const cats = getPostFiles()
   cats?.map(catItem => {
      const cat = getPostFile(catItem.slug)
      if (cat && cat.status.includes('active')) {
         posts.push({
            ...catItem,
            ...cat
         })
      }
   })
   return posts
}
export const getRelatedPosts = (categorySlug) => {
   console.log({ categorySlug })
   let posts = []
   const files = getPostFiles()
   files?.map(catItem => {
      const cpost = getPostFile(catItem.slug)
      if (cpost && cpost.status.includes('active')) {
         if (cpost.category == categorySlug) {
            posts.push({
               ...catItem,
               ...cpost
            })
         }
      }
   })
   return posts
}

export const getPostFile = (fileName) => {
   try {
      const filePath = jsonDirectory + '/posts/' + fileName + '.json'
      if(!fs.existsSync(filePath)) {
         return false
      }
      const fileContent = fs.readFileSync(filePath)
      return JSON.parse(fileContent.toString());
   } catch (error) {
      return {}
   }
}
