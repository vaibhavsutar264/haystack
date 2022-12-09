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
      <Modal {...props} className="md:w-10/12 mx-auto md:my-4 md:mt-32">
         <form onSubmit={onSubmit} data-netlify="true" method="POST" name="contact" className='md:w-7/12 mx-auto p-4 md:p-6 md:px-32 md:py-8 bg-white/95 shadow-lg  relative contact-form rounded-3xl'>
            <button type='button' onClick={onCloseClick} className="absolute top-5 right-5 opacity-60 hover:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
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
            <div className='mb-3 mt-8'>
            <input type={'text'} name={'firstName'} required placeholder={'First name*'} className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-00 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-500 placeholder:font-regular' />
            </div>
            <div className='mb-3'>
                  <input type={'text'} name={'lastName'} placeholder={'Last name*'} className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-500 placeholder:font-regular' />
           </div>
            <div className='mb-3'>
               <input type={'text'} name={'profession'} placeholder={'Profession*'} className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-500 placeholder:font-regular' />
            </div>
            <div className='mb-3'>
               <input type={'text'} name={'institute'} placeholder={'Institute/Company name'} className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-500 placeholder:font-regular' />
            </div>
            <div className='mb-3'>
               <input type={'tel'} name={'phoneNumber'} required placeholder={'Phone number*'} className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-500 placeholder:font-regular' />
            </div>
            <div className='mb-3'>
               <input type={'email'} name={'email'} required placeholder={'Email ID*'} className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-500 placeholder:font-regular' />
            </div>
            <div className='mb-3'>
               <input name="body" id="body" type={'text'}  placeholder={'Short Message'} className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-500 placeholder:font-regular'/>
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <div className='my-3 text-center mt-8'>
               <button disabled={isLoading} className={`bg-light-gray-button text-gray-400 px-16 uppercase font-bold py-2  ${isLoading ? 'bg-gray-400': ''}`}>
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
