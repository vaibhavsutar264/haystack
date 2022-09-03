import styled from "@emotion/styled";
import React, { useState } from "react";
// import SunEditor from 'suneditor-react';
// import 'suneditor/dist/css/suneditor.min.css';
// import 'suneditor/src/assets/css'
// import 'suneditor/dist/css/suneditor.min.css';

const StyledEditor = styled.div`
   textarea {
      width: 100%;
   }
`

export default function ContentEditor({ onChange, value, ...props }) {
   return (
      <StyledEditor>
         <textarea height={'250px'} defaultValue={value} onChange={onChange}>{value}</textarea>
         {/* <SunEditor height={'250px'} defaultValue={value} onChange={onChange}/> */}
      </StyledEditor>
   )
}
