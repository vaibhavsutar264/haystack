import styled from "@emotion/styled";
import React, { useState, useRef, useMemo, useEffect } from 'react';
// import JoditEditor from 'jodit-react';
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })
const StyledEditor = styled.div`
   textarea {
      width: 100%;
   }
`

export default function ContentEditor({ onChange, value, name, placeholder, ...props }) {
   const [ isMounted, setIsMounted ] = useState(false)
   const editor = useRef(null);
	const [content, setContent] = useState('');

	// const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
	// 		placeholder: placeholder || 'Start typings...'
	// 	},
	// 	[placeholder]
	// );
   useEffect(() => {
      setIsMounted(true)
   }, [])
   return (
      <StyledEditor>
         {/* <textarea height={'250px'} defaultValue={value} onChange={onChange}>{value}</textarea> */}
         {/* {isMounted && <Editor />} */}
         {isMounted && (
            <JoditEditor
               ref={editor}
               value={value}
               // config={config}
               tabIndex={1} // tabIndex of textarea
               onBlur={(newContent) => {
                  onChange({
                     target: { name, value: newContent }
                  })
                  console.log({ newContent })
               }} // preferred to use only this option to update the content for performance reasons
               onChange={(newContent) => {
                  console.log({ newContent })
               }}
            />
         )}

         {/* <SunEditor height={'250px'} defaultValue={value} onChange={onChange}/> */}
      </StyledEditor>
   )
}
