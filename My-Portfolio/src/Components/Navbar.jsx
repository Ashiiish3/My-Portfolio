import React, { useState } from 'react'
import logo from '../Assets/Images/Logo.png'
import {Link} from 'react-scroll'
import { RxSun } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";

export default function Navbar() {
  const [mode, setMode] = useState(true)
  return (
    <div className={`flex justify-between items-center sticky top-0 z-10 ${mode ? "bg-lightBodyColor": "bg-darkBodyColor"} px-12 h-24 border-opacity-100 border-b-gray-300 border-b-[1px]`} >
      <div className='flex justify-between items-center'>
        <div className={`rounded-full border-[3px] ${mode ? "border-borderColor" : "border-[#494949]"}`}>
          <img src={logo} alt={logo} height={65} width={65} className='rounded-full brightness-110' />
        </div>
        <h2 className={`ms-3 text-xl font-medium ${mode ? "text-black" : "text-textDarkMode"}`}>Ashish</h2>
      </div>
      <div className='flex justify-between items-center gap-12'>
        <ul className={`flex justify-between gap-14 uppercase ${mode ? "text-textColor": "text-textDarkMode"} font-medium`}>
            <li className={`${mode ? "hover:text-black" : "hover:text-white"} cursor-pointer`}><Link activeClass="active" to="Home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
            <li className={`${mode ? "hover:text-black" : "hover:text-white"} cursor-pointer`}><Link to="Skills" spy={true} smooth={true} offset={50} duration={500} >Skills</Link></li>
            <li className={`${mode ? "hover:text-black" : "hover:text-white"} cursor-pointer`}><Link to="test1" spy={true} smooth={true} offset={50} duration={500} >Projects</Link></li>
            <li className={`${mode ? "hover:text-black" : "hover:text-white"} cursor-pointer`}><Link to="test1" spy={true} smooth={true} offset={50} duration={500} >Resume</Link></li>
            <li className={`${mode ? "hover:text-black" : "hover:text-white"} cursor-pointer`}><Link to="test1" spy={true} smooth={true} offset={50} duration={500} >Contacts</Link></li>
        </ul>
        <div>
          <div className={`cursor-pointer p-3 rounded-full text-xl ${mode ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]": "shadow-boxShadowDarkMode"}`} onClick={()=>setMode(!mode)}>
            {mode ?  <IoMoonOutline className='text-black' /> : <RxSun className='text-white' />  }
          </div>
        </div>
      </div>
    </div>
  )
}