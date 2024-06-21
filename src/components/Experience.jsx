import React from 'react'
import CmsImg from "../images/cms2.png"
import GiecImg from "../images/giec5.png"
import eliteFeatsImg from "../images/elitefeats5.png"
import Github from "../images/github.png"

function Experience() {
  return (
    <div name="Experience" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center'>
        <div className='pb-8 flex flex-col items-center'>
        <p className='text-7xl font-bold border-b-4 border-gray-500 flex justify-center -mt-32'>Experience</p>
        </div>
        <div className="grid grid-cols-3 gap-8 h-1/6 mb-5">
        <div className=''>
          <p className='flex justify-center'>EliteFeats CMS</p>
          <div className='shadow-2xl flex justify-center rounded-xl w-11/12'>
          <a href='https://clients.elitefeats.com.au/auth/login/' target='_blank' rel="noreferrer" >
            <div className='transition ease-in-out delay-150 hover:scale-110 duration-300...'>
            <img src={CmsImg} alt="cms" className='rounded-xl'/>
            </div>
            </a>
            </div>
            <p className='mt-5'>
              <ul className='list-disc text-left'>
                <li>Uni Project</li>
                <li>Front-End Developer</li>
                <li>Form Handling and Validation</li>
                <li>ReactJS/ MaterialUI / Formik</li>
                <li>Backend Integration</li>
                <li>Testing</li>
              </ul>
            </p>
          </div>

          <div>
          <p className='flex justify-center'>SEO Internship</p>
          <div className='shadow-2xl flex justify-center rounded-xl w-11/12'>
          <a href="https://giecglobal.com/" target="_blank" rel="noreferrer">
            <div className='transition ease-in-out delay-150 hover:scale-110 duration-300... '>
            <img src={GiecImg} alt="giec" className='rounded-xl'/>
            </div>
            </a>
            </div>
            <p className='mt-5'>
              <ul className='list-disc text-left'>
                <li>Market research and Competitor Analysis</li>
                <li>Keyword research with Google Keyword Planner</li>
                <li>Webpage Optimization with Meta Tags, Header Tags,etc</li>
                <li>Developed Proficiency in SEO Tools such as SemRushs, Ahrefs, etc</li>
              </ul>
            </p>
          </div>
          
          <div>
          <p className='flex justify-center'>Neesham Consulting</p>
          <div className='shadow-2xl flex justify-center rounded-xl w-11/12'>
          <a href='https://elitefeats.com.au/' target='_blank' rel="noreferrer" >
            <div className='transition ease-in-out delay-150 hover:scale-110 duration-300...'>
            <img src={eliteFeatsImg} alt="cms" className='rounded-xl'/>
            </div>
            </a>
            </div>
            <p className='mt-5'>
              <ul className='list-disc text-left'>
                <li>Casual Freelancing</li>
                <li>Wordpress</li>
                <li>Layout Changes</li>
                <li>Various Plugins Research</li>
                <li>Basic Functionality</li>
              </ul>
            </p>
          </div>
        </div>
       </div>
        </div >
  )
}

export default Experience