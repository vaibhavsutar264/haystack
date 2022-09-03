import excuteQuery from "../../../db"

export default async function handler(req, res) {
   try {
      const response = await excuteQuery({
         query: "INSERT INTO posts () VALUES()",
         values: []
      })
      console.log({ req, response })
      res.status(200).json({ ok: true })
   } catch (error) {
      res.status(400).json({ ok: false })
   }

}
