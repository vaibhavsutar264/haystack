import styled from "@emotion/styled";
import { Image } from "../../atoms";
import { Field } from "../../molecules";

const StyledMediaInfoPanel = styled.div`
   display: flex;
   gap: 1.5rem;
   min-height: 200px;
   .MediaInfoPanel__preview {
      min-width: 300px;
      width: 60%;
   }
   .MediaInfoPanel__info {
      min-width: 250px;
   }
`

export default function MediaInfoPanel({ item, ...props }) {
   return (
      <StyledMediaInfoPanel className="MediaInfoPanel">
         {/* <Formik */}
         <div className="MediaInfoPanel__preview">
            <Image src={item.path} />
         </div>
         <div className="MediaInfoPanel__info">
            <Field inputProps={{ value: item.title, size: 'small', placeholder: 'filename.ext' }} label={'File name'} name={'name'} required={true} />
            <Field inputProps={{ size: 'small', placeholder: 'Visible on image failure' }} label={'Alt'} name={'alt'}  />
            <Field inputProps={{ size: 'small', placeholder: 'Citation or description' }} label={'Caption'} name={'alt'}  />
         </div>
      </StyledMediaInfoPanel>
   )
}

MediaInfoPanel.defaultProps = {
   item: {}
}
