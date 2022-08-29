import { createContext, Fragment, useCallback } from "react"
import { Field } from "../../molecules"
import FormActions from "./FormActions"
import { Formik } from 'formik'
import { useMutation } from "react-query"
import { server } from "../../../utils"
import toast from "react-hot-toast"
import components from "../.."

const FormContext = createContext({

})
FormContext.displayName = 'FormContext'

const useForm = ({ url, method = 'post' }) => {
   return useMutation(async payload => {
      payload._method = method
      return await server.post(url, payload)
   }, {
      onSuccess({ data }) {
         toast(data.message)
      },
      onError({ response, message }) {
         toast(response?.data?.message ?? message)
      },
   })
}

// components.
export default function Form ({ children, url, initialValues, onSuccess, onError, validation, primaryAction, secondaryAction, deleteAction }) {
   const { mutateAsync } = useForm({ url })
   const handleSubmit = useCallback(async (values, { setSubmitting, setErrors }) => {
      setSubmitting(true)
      try {
         const { data } = await mutateAsync(values)
         onSuccess && onSuccess(data)
      } catch (error) {
         setErrors(error.response?.data?.errors)
         onError && onError(error)
      } finally {
         setSubmitting(false)
      }
   }, [])

   return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize validationSchema={validation}>
         {(form) => (
            <Fragment>
               {children && children(form)}
               <FormActions {...{primaryAction, secondaryAction, deleteAction}} />
            </Fragment>
         )}
      </Formik>
   )
}

Form.defaultProps = {
   method: 'post',
   initialValues: {},
   validation: {},
   onSuccess: e => console.log(e),
   onError: e => console.warn(e),
}

Form.Field = Field
