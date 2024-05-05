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
      img: {HtmlCssImg},
      name: "HTML/CSS"
    },
    {
      id:2,
      img: {JavascriptImg},
      name: "Javascript"
    },
    {
      id:3,
      img: {ReactImg},
      name: "React.JS"
    },{
      id:4,
      img: {NodeImg},
      name: "Node.JS"
    },
    {
      id:5,
      img: {MongoDBImg},
      name: "MongoDB"
    },
    {
      id:6,
      img: {MaterialUIImg},
      name: "MaterialUI"
    },
    {
      id:7,
      img: {TailwindImg},
      name: "Tailwind"
    },
    {
      id:8,
      img: {GithubImg},
      name: "Github"
    }
  ]

  return (
    <div name="Skills" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
        <div className='pb-8 flex justify-center mt-40'>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>
        <div>

        </div>
       </div>
        </div >
  )
}

export default Skills