import useFileupload from "./useFileupload"
import {useDropzone} from 'react-dropzone'
import { Fragment, useCallback, useState } from "react"
import styled from "@emotion/styled"
import { Button, Text } from "../../atoms"
import Icon from "../../atoms/Icon"
import FileItem from "./FileItem"
import FileUploader from "../FileUploader/FileUploader"
import { ErrorBoundary } from "../../molecules"
import toast from "react-hot-toast"

const StyledDiv = styled.div`
  background: var(--dark-1);
  border-radius: var(--rounded-lg);
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--dark-2);
  display: flex;
  min-height: 130px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  .preview {
     aspect-ratio: var(--aspect-ratio, 4/3);
     display: flex;
     align-items: center;
     justify-content: center;
     height: 100px;
     background: var(--dark-3);
     border-radius: var(--rounded-lg)

  }
  .description {
     font-size: 14px;
  }
`

const UploadProgressAction = ({ files,  }) => {
   const { mutate, isLoading, } = useFileupload()
   const buttonProps = {
      title: isLoading ? 'Uploading...' : 'Upload',
      onClick: () => {
         mutate({ files })
      }
   }
   return (
      <div>
         <Button {...buttonProps} />
      </div>
   )
}

export default function Fileupload({ name, maxFiles = 3, ...props }) {
   const [ preview, setPreview ] = useState(null)
   const [ files, setFiles ] = useState([])
   const onDrop = useCallback(acceptedFiles => {
      try {
         setFiles(prev => [...prev, ...acceptedFiles])
         acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
               // Do whatever you want with the file contents
              const binaryStr = reader.result
              console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
         })

      } catch (error) {

      }
   }, [])
   function onDelete(fileItem) {
      try {
         let newFiles = files && files.filter(fl => fl.path !== fileItem.path)
         console.log({ newFiles })
         setFiles(newFiles)
      } catch (error) {
         toast(error.message)
      }
   }
   const { getRootProps, getInputProps, isDragActive, } = useDropzone({ onDrop, maxFiles: maxFiles })
   const { response, } = useFileupload({ name, })
   const renderFiles = files && files.map(fl => (
      <FileItem key={fl.path} item={fl} onDelete={() => onDelete(fl)} />
   ))
   return (
      <Fragment>
         <ErrorBoundary>
            {/* <FileUploader /> */}
         </ErrorBoundary>
         {/* <StyledDiv {...getRootProps({ refKey: 'innerRef' })} css={[tw`flex items-center text-center`]}>
            <input {...getInputProps()} />
            <div style={{ textAlign: 'center' }}>
               <Icon name={'upload'} size={'lg'} className={'text-center icon-lg'} />
               <Text>
                  {
                     isDragActive ?
                     `Drop the files here ...`:
                     `Drag 'n' drop some files here, or click to select files`
                  }
               </Text>
            </div>
         </StyledDiv> */}
         {/* <div>{renderFiles}</div> */}
      </Fragment>
   )
}
