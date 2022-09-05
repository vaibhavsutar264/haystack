import { getPostFile } from '../../../utils/posts'

// import excuteQuery from "../../../db"
const fs = require('fs')
const path = require('path')

export default async function handler(req, res) {
   try {
      const fileContent = getPostFile(req.query.id)
      console.log('filename: ', fileContent)
      res.status(200).json({ ok: true, data: fileContent })
   } catch (error) {
      console.warn({ error })
      res.status(400).json({ ok: false, error })
   }

}
