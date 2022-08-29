import TextInput from "./TextInput"

const defaultProps = {
   type: 'email'
}
export default function EmailInput(props = defaultProps){
   return (
      <div>
         <TextInput {...props} type={'email'} />
      </div>
   )
}
