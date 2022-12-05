// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getRelatedPosts } from '../../utils/posts'

export default function handler(req, res) {
   const categorySlug = req.query.category
   const exclude = req.query.exclude
   const data = getRelatedPosts(categorySlug, { exclude })

   res.status(200).json({
      ok: true,
      params: req.query,
      data: data,
   });
}
