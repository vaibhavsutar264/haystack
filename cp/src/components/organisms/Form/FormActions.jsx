import { Button, Flex } from "../../atoms";

export default function FormActions({ primaryAction, secondaryAction, deleteAction }) {
   return (
      <Flex gap={'1rem'}>
         <div>
            {deleteAction && <Button title={'Remove'} {...deleteAction} />}
         </div>
         <Flex gap={'1rem'}>
            {secondaryAction && <Button title={'Cancel'} {...secondaryAction} />}
            {primaryAction && <Button variant="primary" type="submit" title={'Submit'} {...primaryAction} />}
         </Flex>
      </Flex>
   )
}

FormActions.defaultProps = {
   primaryAction: null,
   secondaryAction: null,
   deleteAction: null,
}
