import React from 'react'
import HeroImage from "../images/jkr.jpeg"
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-scroll';

function Introduction() {

  return (
    <div name="Introduction" className='h-screen w-full bg-gradient-to-b from-cyan-800 to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
              I'm a Front End Developer
            </h2>
            <p className='text-white py-4 max-w-md'>
              Graduate Front-End Developer majored in Mobile Application Development from Academy of Interactive Technology
            </p>
            <div>
              <Link to="Skills" smooth duration={500} className='group text-white w-32 px-6 py-3 my-2 flex justify-center center items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                Skills
                <span className='group-hover:rotate-90 duration-300 ml-22'>
                  <HiArrowSmRight />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
          </div>
        </div>
    </div >
    
  )
}

export default Introduction