// import middleware from 'middleware/middleware'
import nextConnect from 'next-connect'

const handler = nextConnect()
handler.use(context => {
   console.log({ context })
})

handler.post(async (req, res) => {
  console.log(req.body)
  console.log(req.files)

  //...
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler
