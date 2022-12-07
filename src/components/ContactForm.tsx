import { useState } from 'react'
import Modal from 'react-modal'

interface IContactForm {
   onSuccess?: Function,
   onError?: Function,
   // onError?: Function,
}
export default function ContactForm(props: IContactForm|any) {
   const [ response, setResponse ] = useState(null)
   const [ error, setError ] = useState(null)
   const [ isLoading, setIsLoading ] = useState(false)
   const onCloseClick = () => {
      props.onCloseClick()
   }
   const onSubmit = (ev) => {
      ev.preventDefault()
      const payload = new FormData(ev.target)
      const req = new Request('/', {
         body: payload,
         method: 'POST',
         headers: {
            Accept: 'application/json'
         }
      })
      setIsLoading(true)
      setError(null)
      setResponse(null)
      fetch(req).then((res) => res.json()).then((res) => {
         console.log({ res })
         setResponse(res)
      }).catch(err => {
         setError(err)
      }).finally(() => {
         setIsLoading(false)
      })
   }
   return (
      <Modal {...props} className="md:w-5/12 mx-auto md:my-4 md:mt-10">
         <form onSubmit={onSubmit} data-netlify="true" method="POST" name="contact" className='p-4 md:p-6 bg-white/70 shadow-lg  relative'>
            <button type='button' onClick={onCloseClick} className="absolute top-3 right-3 opacity-60 hover:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
            <div className="mb-4">
               <h3 className='text-lg font-bold'>Contact form</h3>
            </div>
            {error && (
               <div className='mb-3 text-center text-red-600'>
                  {JSON.stringify(error.message)}
               </div>
            )}
            {response && (
               <div className='mb-3 text-center text-green-600'>
                  {JSON.stringify({ response })}
               </div>
            )}
            <>
            <div className="flex items-center gap-4">
               <div className='mb-3 flex-1'>
                  <input type={'text'} name={'firstName'} placeholder={'First name'} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
               </div>
               <div className='mb-3 flex-1'>
                  <input type={'text'} name={'lastName'} placeholder={'Last name'} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
               </div>
            </div>
            <div className='mb-3'>
               <input type={'text'} name={'profession'} placeholder={'Profession'} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className='mb-3'>
               <input type={'text'} name={'institute'} placeholder={'Institute/Company name'} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className='mb-3'>
               <input type={'tel'} name={'phoneNumber'} placeholder={'Phone number'} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className='mb-3'>
               <input type={'email'} name={'email'} placeholder={'Email'} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className='mb-3'>
               <textarea name="body" id="body" cols="30" rows="3" placeholder='Short message' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <div className='my-3 text-center'>
               <button disabled={isLoading} className={`bg-blue-600 text-white px-6 uppercase font-bold py-4  ${isLoading ? 'bg-gray-400': ''}`}>
                  <span>{isLoading ? 'Submitting...': 'Submit'}</span>
               </button>
            </div>
            </>
         </form>
      </Modal>
   )
}

ContactForm.defaultProps = {
   url: '/',

}
