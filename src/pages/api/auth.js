// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'admin'

export default function handler(req, res) {
   console.log(req.body)
   if (req.body.username == ADMIN_USERNAME && req.body.password == ADMIN_PASSWORD) {
      res.status(200).json({
         ok: true,
         message: 'Login successful'
      });
   }
   res.status(200).json({
      ok: false,
      message: 'Username or password is invalid.'
   });
}
