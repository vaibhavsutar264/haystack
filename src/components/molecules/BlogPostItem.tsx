// @ts-nocheck

import Link from "next/link"

interface IBlogPostItem {
   title?: string,
   thumbnailUrl?: string,
   citation?: string,
   author_bio?: string;
   author_name?: string;
   description?: any,
   url?: any,
}
const BlogPostItem = (props: IBlogPostItem) => {
   return (
      <figure className="post-item item">
         <picture className="item__thumbnail">
            <img src={props.thumbnailUrl} alt={props.title} className="mb-3 aspect-[16/9] bg-gray-200 object-cover" />
         </picture>
         <figcaption className="item__caption my-6">
            <p className="font-medium text-sm line-clamp-3">{props.date}</p>
            <Link href={props.url}>
               <p className="cursor-pointer font-semibold text-md my-6 line-clamp-3 post-title min-70px">{props.title}</p>
            </Link>
            <p>
               <a className="hlink hlink--success">{props.author_name} <span className="display-block author-bio">{props.author_bio}</span></a>
            </p>
         </figcaption>
      </figure>
   )
}

export default BlogPostItem
