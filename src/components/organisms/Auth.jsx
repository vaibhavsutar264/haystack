import { useRouter } from "next/router";
import { Bootstrap } from "../../../cp/src";
import { TextInput } from "../../../cp/src/components/atoms";
import { ErrorBoundary, Field } from "../../../cp/src/components/molecules";
import FormActions from "../../../cp/src/components/molecules/FormActions";
import { Form } from "../../../cp/src/components/organisms";
import GuestLayout from "../../../cp/src/components/templates/GuestLayout";

export default function Auth() {
   const router = useRouter()
   const onSuccess = (data) => {
      router.push('/cp')
   }
   return (
      <Bootstrap Layout={GuestLayout}>
         <ErrorBoundary>
            <div className="w-6/12 mx-auto">
               <Form initialValues={{}} url={`/api/auth`} onSuccess={onSuccess}>
                  <Field name="username" label={'Username'} />
                  <Field name="password" type={'password'} label={'Password'} />
                  <FormActions submitLabel="Login" />
               </Form>
            </div>
         </ErrorBoundary>
      </Bootstrap>
   )
}
