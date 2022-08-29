import { useAsyncList } from "@react-stately/data"

const sampleItem = {
   name: '',
   uri: '',
   mime_type: '',
}
export function useMutateMediaLibrary() {
   const URL = "https://jsonplaceholder.typicode.com/photos"
   const list = useAsyncList({
      async load({ signal }) {
         let res = await fetch(URL, { signal });
         let json = await res.json();
         return { items: json };
      }
   })
   return {
      data: (new Array(100)).fill(sampleItem),
      ...list,
   }
}
export default function useMediaLibraryQuery() {
   // const q = useQuery([ '/api/attachments' ])
}
