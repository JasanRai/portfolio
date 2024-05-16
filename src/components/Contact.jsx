import React, { Fragment, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Dialog, Transition } from '@headlessui/react'

function Contact() {
    const form = useRef();
    const [open, setOpen] = useState(false)

    const letsTalkBtnOnClick = () => {
      setOpen(true);
    }

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm('service_lobqqtp', 'template_vz3vjia', form.current, {
        publicKey: 'HceIYaG0PF4TQRk1K',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div name="Contact" className='h-screen w-full bg-gradient-to-b from-gray-800 to-cyan-800 text-white'>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className='pb-8'>
                <p className='text-7xl font-bold border-b-4 border-gray-500 flex justify-center'>Contact</p>
                <p className='py-6 flex justify-center'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://formsubmit.co/jasanrai95@hotmail.com" onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2' >
                    <input type="text" name="user_name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="email" name="user_email" placeholder="Enter your email" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder="Enter your message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <button onClick={letsTalkBtnOnClick} type="submit" value="Send" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>
                      {/* Dialog Box */}
                    <Transition.Root show={open} as={Fragment}>
                      <Dialog className="relative z-10" onClose={setOpen}>
                        <Transition.Child as={Fragment} enter = "ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom='Opacity-100' leaveTo="opacity-00">
                          <div className='fixed inset-0 z-10 w-screen overflow-y-auto' />
                        </Transition.Child>
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                              <div className="bg-slate-100 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="flex justify-center">
                    
                                  <div className="mt-5">
                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900" >
                                    Form Submitted Successfully!
                                    </Dialog.Title>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-slate-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 sm:w-auto"
                                onClick={() => setOpen(false)}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                        </div>
                      </Dialog>
                    </Transition.Root>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact