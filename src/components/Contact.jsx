import React from 'react'

function Contact() {
  return (
    <div name="Contact" className='h-screen w-full bg-gradient-to-b from-gray-800 to-cyan-800 text-white'>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className='pb-8'>
                <p className='text-7xl font-bold border-b-4 border-gray-500 flex justify-center'>Contact</p>
                <p className='py-6 flex justify-center'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://formsubmit.co/jasanrai95@hotmail.com" method='POST' className='flex flex-col w-full md:w-1/2' >
                    <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="email" name="email" placeholder="Enter your email" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder="Enter your message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <button type="submit" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact