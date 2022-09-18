import { useField } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { server } from '../../../utils';
// import { Dashboard, useUppy } from '@uppy/react'


export default function Fileuploader ({ name }) {
   const [field, meta, helpers] = useField({ name });
   const { isLoading, data, mutateAsync } = useMutation(async (payload) => {
      return server.post(`/api/upload`, payload)
   })
   useEffect(() => {
      if (data) {
         helpers.setValue(data.data?.url);
      }
   }, [data])
   const sendFileAndGetURL = (file) => {
      const formdata = new FormData
      formdata.set('file', file)
      mutateAsync(formdata)
   }
  React.useEffect(() => {
   //  return () => uppy.close()
  }, [])

  return (
    <div>
      <input name={name} type="file" onChange={(event) => {
         console.log(event.currentTarget.files[0])
         sendFileAndGetURL(event.currentTarget.files[0])
         // helpers.setValue(event.currentTarget.files[0]);
         }} />
         {isLoading && (
            <p>
               Uploading...
            </p>
         )}
    </div>
  )
}
