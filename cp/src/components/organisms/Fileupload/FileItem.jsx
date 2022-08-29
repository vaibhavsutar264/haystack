import styled from "@emotion/styled"
import { useMemo } from "react"
import { Button, Flex, Icon, IconButton, Image } from "../../atoms"
import useFileupload from "./useFileupload"

const StyledFileItem = styled.figure`
   display: flex;
   margin: 0;
   padding: 0;
   gap: 0.5rem;
   margin-bottom: 0.6rem;
   align-items: center;
   .file_type {
      width: 32px;
      height: 32px;
   }
   figcaption {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 14px;
      margin: 0;
   }
`
export default function FileItem({ item, onDelete, ...props }) {
   const previewImageUri = useMemo(() => {
      switch (item.type) {
         case 'image/png':
         case 'image/jpg':
         case 'image/jpeg':
         case 'image/gif':
         case 'image/webp':
            return 'photo'
         default:
            return 'document'
      }
   }, [ item ])
   const { isLoading, mutate } = useFileupload()
   function uploadFileAsync() {
      mutate({ file: item })
   }

   return (
      <StyledFileItem>
         <Icon name={previewImageUri} />
         <figcaption>
            <div>
               {item.name}
            </div>
            <Flex gap={'1rem'}>
               <IconButton loading={isLoading} disabled={isLoading} variant='default' name={'close'} onClick={onDelete} />
               <Button size={'small'} loading={isLoading} disabled={isLoading} variant='default' title={'Upload'} name={'close'} onClick={uploadFileAsync} />
            </Flex>
         </figcaption>
      </StyledFileItem>
   )
}
