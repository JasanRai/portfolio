import React from 'react'
import ReactImg from "../images/react.png"
import GithubImg from "../images/github.png"
import JavascriptImg from "../images/javascript.png"
import HtmlCssImg from "../images/htmlcss.png"
import MaterialUIImg from "../images/materialui.png"
import MongoDBImg from "../images/mongodb.png"
import NodeImg from "../images/node.png"
import TailwindImg from "../images/tailwind.png"

function Skills() {

  const languages = [
    {
      id:1,
      img: HtmlCssImg,
      name: "HTML/CSS",
      style: "shadow-white"
    },
    {
      id:2,
      img: JavascriptImg,
      name: "Javascript",
      style: "shadow-yellow-500"
    },
    {
      id:3,
      img: ReactImg,
      name: "React.JS",
      style: "shadow-blue-600"
      
    },
    {
      id:4,
      img: NodeImg,
      name: "Node.JS",
      style: "shadow-green-400"
    },
    {
      id:5,
      img: MongoDBImg,
      name: "MongoDB",
      style: "shadow-green-700"
    },
    {
      id:6,
      img: MaterialUIImg,
      name: "MaterialUI",
      style: "shadow-cyan-500"
    },
    {
      id:7,
      img: TailwindImg,
      name: "Tailwind",
      style: "shadow-sky-400"
    },
    {
      id:8,
      img: GithubImg,
      name: "Github",
      style: "shadow-purple-500"
    }
  ]

  return (
    <div name="Skills" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center'>
        <div className='pb-8 flex flex-col items-center'>
          <p className="text-7xl font-bold inline border-b-4 border-gray-500 mb-14">
            Technical Skills
          </p>
          <p className="text-xl mb-14">
            These are the technical skills that I have acquired:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 p-5 place-items-center items-center text-center py-8 px-12 tall:py-0 sm:px-0" style={{background:"rgba(55, 65, 81,0.24)", borderRadius:"16px", boxShadow: "0 4px 30px rgba(0,0,0,0.1)", backdropFilter:"blur(5px)", WebkitBackdropFilter:"blur(5px)", border:"1px solid rgba(55, 65, 81, 0.3)"}}>
          {languages.map(({img, id, name,style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} mt-8 w-3/4 mb-8`}>
            <img src = {img} alt="" className='h-28 w-28 mx-auto'/>
            <h3>
              {name}
            </h3>
            </div>
          ))}
        </div>
        <div>

        </div>
       </div>
        </div >
  )
}

export default Skills