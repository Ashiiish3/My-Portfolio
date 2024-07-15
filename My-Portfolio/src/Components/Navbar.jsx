import React, { useState } from 'react'
import logo from '../Assets/Images/Logo.png'
import {Link} from 'react-scroll'
import { RxSun } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";

export default function Navbar() {
  const [mode, setMode] = useState(true)
  return (
    <div className={`flex justify-between items-center bg-{mode ? lightBodyColor : darkBodyColor} px-12 h-24`}>
      <div className='flex justify-between items-center'>
        <img src={logo} alt={logo} height={65} width={65} className='rounded-full border-[3px] border-borderColor' />
        <h2 className='ms-3 text-xl font-medium'>Ashish</h2>
      </div>
      <div className='flex justify-between items-center gap-10'>
        <ul className='flex justify-between gap-10 uppercase text-textColor font-medium'>
            <li className='hover:text-black cursor-pointer'><Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
            <li className='hover:text-black cursor-pointer'><Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >Skills</Link></li>
            <li className='hover:text-black cursor-pointer'><Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >Projects</Link></li>
            <li className='hover:text-black cursor-pointer'><Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >Resume</Link></li>
            <li className='hover:text-black cursor-pointer'><Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >Contacts</Link></li>
        </ul>
        <div>
          <div className='cursor-pointer p-3 rounded-full text-xl shadow-boxShadow bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]' onClick={()=>setMode(!mode)}>
            {mode ? <RxSun /> : <IoMoonOutline />}
          </div>
        </div>
      </div>
    </div>
  )
}
