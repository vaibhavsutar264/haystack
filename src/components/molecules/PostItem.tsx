// @ts-nocheck

import Link from "next/link"

interface IPostItem {
   title?: string,
   thumbnailUrl?: string,
   citation?: string,
   description?: any,
   url?: any,
}
const PostItem = (props: IPostItem) => {
   return (
      <figure className="post-item item">
         <picture className="item__thumbnail">
            <img src={props.thumbnailUrl} alt={props.title} className="mb-3 aspect-[4/3] bg-gray-200 object-cover" />
         </picture>
         <figcaption className="item__caption my-6">
            <p className="font-medium text-sm line-clamp-3">{props.date}</p>
            <p className="font-semibold text-sm my-6 line-clamp-3 post-title">{props.title}</p>
            <p className="mb-4 text-sm line-clamp-3">{props.description}</p>
            <p>
               <Link href={props.url}>
                  <a className="hlink hlink--success">Read more</a>
               </Link>
            </p>
         </figcaption>
      </figure>
   )
}

export default PostItem
