import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { Bootstrap } from "../../../../cp/src";
import axios from 'axios'
// import excuteQuery from "../../../db";
// import { useQuery } from 'react-query'
// react-hooks/rules-of-hooks

// const usePostQuery = (id) => useQuery('/api/posts?id='+id)

export default function edit({ post }) {
   const [ data, setData ] = useState({})
   useEffect(() => {
      const sp = new URL(globalThis.location.href)
      const postId = sp.searchParams.get('post_id')
      if (postId) {
         axios.get(`/api/posts/find?id=${postId}`).then(res => {
            setData(res.data)
         })
      }
      console.log(sp)
   }, [])
   return (
      <Bootstrap>
         {/* sdf */}
         {JSON.stringify({ data, })}
      </Bootstrap>
   )
}

export async function getStaticProps(context) {
   console.dir({ context })
   return {
     props: {
      // paths: slugs,
      // post: JSON.parse(JSON.stringify(post)),
      fallback: true,
     }, // will be passed to the page component as props
   }
}
