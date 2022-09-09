import { kebabCase } from 'lodash';
import { jsonDirectory } from '../../../utils';

// import excuteQuery from "../../../db"
const fs = require('fs')
const path = require('path')


export default async function handler(req, res) {
   try {
      const categorieslug = kebabCase(req.body.slug)
      const data = {
         ...req.body,
         slug: categorieslug,
      }
      const filePath = jsonDirectory + '/categories/' + categorieslug + '.json'
      console.log('filename: ', filePath)
      const isAlreadyExist = fs.existsSync(filePath)
      if (isAlreadyExist) {
         // update
         var createStream = fs.createWriteStream(filePath);
         createStream.write('')
         createStream.write(JSON.stringify(data))
         createStream.end();
      } else {
         var createStream = fs.createWriteStream(filePath);
         createStream.write('')
         createStream.write(JSON.stringify(data))
         createStream.end();
      }
      res.status(200).json({ ok: true, message: 'Category saved.' })
   } catch (error) {
      console.warn({ error })
      res.status(400).json({ ok: false, error })
   }

}
