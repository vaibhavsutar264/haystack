// import excuteQuery from "../../../db"
const fs = require('fs')
const path = require('path')

const jsonDirectory = path.join(process.cwd(), 'json');

export default async function handler(req, res) {
   try {
      const postSlug = req.body.slug
      const filePath = jsonDirectory + '/posts/' + postSlug + '.json'
      console.log('filename: ', filePath)
      const isAlreadyExist = fs.existsSync(filePath)
      if (isAlreadyExist) {
         // update
         var createStream = fs.createWriteStream(filePath);
         createStream.write('')
         createStream.write(JSON.stringify(req.body))
         createStream.end();
      } else {
         var createStream = fs.createWriteStream(filePath);
         createStream.write('')
         createStream.write(JSON.stringify(req.body))
         createStream.end();
      }
      res.status(200).json({ ok: true, message: 'Post saved.' })
   } catch (error) {
      console.warn({ error })
      res.status(400).json({ ok: false, error })
   }

}
