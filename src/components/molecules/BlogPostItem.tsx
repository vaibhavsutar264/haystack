// @ts-nocheck

import Link from "next/link"

interface IBlogPostItem {
   title?: string,
   thumbnailUrl?: string,
   citation?: string,
   description?: any,
   url?: any,
}
const BlogPostItem = (props: IBlogPostItem) => {
   return (
      <figure className="post-item item">
         <picture className="item__thumbnail">
            <img src={props.thumbnailUrl} alt={props.title} className="mb-3 aspect-video bg-gray-200 object-cover" />
         </picture>
         <figcaption className="item__caption">
            <p className="font-medium text-sm mb-4 line-clamp-3">{props.date}</p>
            <p className="font-semibold text-sm mb-4 line-clamp-3">{props.title}</p>
            <p>
               <Link href={props.url}>
                  <a className="hlink hlink--success">Read more</a>
               </Link>
            </p>
         </figcaption>
      </figure>
   )
}

export default BlogPostItem
