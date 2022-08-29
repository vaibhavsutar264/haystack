import { Fragment } from "react"
import { Popover } from "../molecules"
import Icon from "./Icon"
import Select from "./Select"
import TextInput from "./TextInput"

const defaultProps = {
   type: 'search'
}
const styles = {
   field: {
      display: 'flex',
   }
}
export default function SearchInput({ onClear, isLoading = false,  ...props }) {
   function clearSearch() {
      onClear && onClear()
   }
   return (
      <div style={styles.field}>
         <TextInput {...props}
            prepend={() => <Icon name={'search'} />}
            append={() => (
               <Fragment>
                  {props.value && <Icon name={'close'} onClick={clearSearch} />}
               </Fragment>
            )}
         />
      </div>
   )
}

SearchInput.defaultProps = {
   ...defaultProps,
}
