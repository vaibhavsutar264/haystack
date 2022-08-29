import React from 'react'
import { Dashboard, useUppy } from '@uppy/react'
// import Webcam from '@uppy/webcam'
import Uppy from '@uppy/core'
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

export default function Uploader () {
   const uppy = useUppy(() => {
      return new Uppy({ id: 'fileuploader' });
    });
  React.useEffect(() => {
   //  return () => uppy.close()
  }, [])

  return (
    <Dashboard
      id='MyWebcam'
      uppy={uppy}
      // plugins={['Webcam']}
    />
  )
}
