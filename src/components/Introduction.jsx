import React from 'react'
import HeroImage from "../images/jkr.jpeg"

function Introduction() {
  return (
    <div className='p4 mt-16 flex lg:h-2/3 sm:h-4/5  justify-center'>
        <div className='size-full box-border w-full rounded-xl border-2 border-black  bg-cyan-800 flex justify-center sm:max-lg:flex-col'>
        <div className='flex justify-center items-center'>
            <img src={HeroImage} alt ="PP" className='lg:w-3/4 lg:h-3/4 rounded-3xl sm:max-lg:w-2/4 sm:max-lg:h-4/ sm:max-lg:mb-16' />
        </div>
        <div className=' flex-col flex justify-center '>
        <div className='text-white xl:text-6xl lg:text-4xl md:text-3xl lg:mb-16 md:mb-5'>
        Front-End Developer
        </div>  
        <div className='text-white'>
        My name is Jasan Kumar Rai and I am an aspiring Front-End Developer
        </div>
       
        </div> 
      
        </div>
        </div >
    
  )
}

export default Introduction