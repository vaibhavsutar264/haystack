// @ts-nocheck

import Link from "next/link"

interface IResearchItem {
   title?: string,
   source?: string,
   thumbnailUrl?: string,
   aspect?: string,
   citation?: string,
   reference?: any,
   url?: any,
}
const ResearchItem = (props: IResearchItem) => {
   return (
      <figure className="post-item item">
         <picture className="item__thumbnail">
            <img src={props.thumbnailUrl} alt={props.title} className={`mb-3 ${props.aspect} bg-gray-200 object-cover`}/>
         </picture>
         <figcaption className="item__caption my-6">
            <p className="font-semibold text-sm my-6 line-clamp-3 post-title">{props.title}</p>
            <p className="mb-4 text-sm  tracking-wider text-reference">{props.reference}</p>
            <p>
               <Link href={props.url}>
                  <a className="hlink--success text-md font-semibold" target="_blank">Read more</a>
               </Link>
            </p>
         </figcaption>
      </figure>
   )
}

export default ResearchItem
