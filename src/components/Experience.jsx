import React from 'react'

function Experience() {
  return (
    <div name="Experience" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center'>
        <div className='pb-8 flex flex-col items-center'>
        <p className='text-7xl font-bold border-b-4 border-gray-500 flex justify-center -mt-32'>Experience</p>
        </div>
        <div className='w-full grid grid-cols-2 gap-2 text-center py-2 px-8'>
          <p className='flex justify-start items-center text-lg'>April 2021 - June 2021 </p>
          <div>
            <p className='text-xl font-bold border-b-2 border-white mb-2'>Neesham Consulting - Frontend Developer</p>
            <ul className='list-disc'>
            <li>Worked on registration and login flows for CMS</li>
            <li>Form handling and Form validation</li>
            <li>Utilized ReactJS and MaterialUI to create visually appealing </li>
            <li>Backend Integration for Login/Register</li>
            <li>Tested software for bugs and operating speed</li>
            </ul>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-3 text-center py-2 px-8 mt-12'>
          <p className='flex justify-start items-center text-lg'>Nov 2023 - Feb 2024 </p>
          <div>
            <p className='text-xl font-bold border-b-2 border-white '>Digimark Online Services - SEO Intern</p>
            <ul className='list-disc'>
            <li>Conducted market research and competitor analysis</li>
            <li>Optimized web pages with relevant meta tags</li>
            <li>Conducted regular backlink profile audits </li>
            <li>Developed proficiency in various SEO tools such as SEMrush, Ahrefs, Moz</li>
            
            </ul>
          </div>
        </div>
       </div>
        </div >
  )
}

export default Experience