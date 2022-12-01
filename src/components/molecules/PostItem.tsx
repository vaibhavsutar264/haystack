// @ts-nocheck

import Link from "next/link"
import { dateFormat } from "../../utils/index"

interface IPostItem {
   title?: string,
   source?: string,
   thumbnailUrl?: string,
   aspect?: string,
   citation?: string,
   description?: any,
   url?: any,
}
const PostItem = (props: IPostItem) => {
   return (
      <figure className="post-item item">
         <picture className="item__thumbnail">
            <img src={props.thumbnailUrl} alt={props.title} className={`mb-3 ${props.aspect} bg-gray-200 object-cover`}/>
         </picture>
         <figcaption className="item__caption my-6">
            <p className="font-semibold text-sm line-clamp-3">{dateFormat(props.date)}&nbsp;|&nbsp;{props.source}</p>
            <p className="font-semibold text-sm my-6 line-clamp-3 post-title">{props.title}</p>
            <p className="mb-4 text-sm line-clamp-3">{props.description}</p>
            <p>
               <Link href={props.url}>
                  <a className="hlink--success text-md font-semibold">Read more</a>
               </Link>
            </p>
         </figcaption>
      </figure>
   )
}

export default PostItem
