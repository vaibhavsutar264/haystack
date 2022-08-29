import { useToggleState } from "@react-stately/toggle"
import axios from "axios"
import { useRef } from "react"
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import { Card, Popover } from "../molecules"
import Button from "./Button"
import Flex from "./Flex"
import SearchInput from "./SearchInput"
import Select from "./Select"
import Spinner from "./Spinner"
import Text from "./Text"
import TextInput from "./TextInput"

const defaultProps = {
   type: 'tel'
}
const styles = {
   field: {
      display: 'flex',
   }
}

const useCountriesQuery = () => useQuery(['countries'], async () => {
   return await axios.get('https://country.io/phone.json')
}, {
   retry: 3,
   onError: e => {
      toast(e.message)
   }
})

const CountryCodesListBox = () => {
   const { data, error, isLoading } = useCountriesQuery()
   return (
      <div>
         {isLoading && (
            <Flex style={{ gap: '6px' }}>
               <Spinner size={26} />
               <Text>Loading...</Text>
            </Flex>
         )}
         {/* {JSON.stringify({ data, error })} */}
      </div>
   )
}
export default function PhoneNumberInput(props = defaultProps) {
   const toggle = useToggleState()

   const popRef = useRef()
   return (
      <div style={styles.field}>
         <TextInput
            {...props}
            type={'tel'}
            prepend={() => (
               <Popover isOpen={toggle.isSelected} ref={popRef} renderTrigger={rprops => (
                  <Button title={'+91'} size={'xs'} {...rprops} />
               )} >
                  <Card>
                     <Card.Header>
                        {/* <Text heading-sm>Country code</Text> */}
                        <SearchInput placeholder={'Country code'} />
                     </Card.Header>
                     <CountryCodesListBox />
                     <Card.Footer>
                        <Flex justifyContent="space-between">
                           <Button size={'sm'} title={'Cancel'} onClick={() => toggle.setSelected(false)} />
                           &nbsp;
                           <Button size={'sm'} title={'Done'} variant="primary" />
                        </Flex>
                     </Card.Footer>
                  </Card>
               </Popover>
            )}
         />
      </div>
   )
}
