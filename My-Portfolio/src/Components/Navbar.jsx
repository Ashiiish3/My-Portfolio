import React, { useContext } from 'react'
import logo from '../Assets/Images/Logo.png'
import {Link} from 'react-scroll'
import { ThemeContext } from '../ContextAPI/ContextAPI';

export default function Navbar() {
  const {themeChange} = useContext(ThemeContext);
  return (
    <div className={`fixed w-full backdrop-blur-md flex top-0 z-10 px-12 h-24 border-opacity-100 border-b-gray-300 border-b-[1px]`} >
      <div className='max-w-[72%] w-full flex justify-between items-center m-auto'>
        <div className=' flex justify-between items-center'>
          <div className={`rounded-full border-[3px] ${themeChange ? "border-borderColor" : "border-[#494949]"}`}>
            <img src={logo} alt={logo} height={65} width={65} className='rounded-full brightness-110' />
          </div>
          <h2 className={`ms-3 text-xl font-medium ${themeChange ? "text-black" : "text-textDarkMode"}`}>Ashish</h2>
        </div>
        <div className='flex justify-between items-center gap-12'>
          <ul className={`flex justify-between gap-14 uppercase ${themeChange ? "text-black": "text-white"} font-semibold`}>
              <li className="hover:text-designColor cursor-pointer"><Link activeClass="active" to="Home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
              <li className="hover:text-designColor cursor-pointer"><Link to="Skills" spy={true} smooth={true} offset={50} duration={500} >Skills</Link></li>
              <li className="hover:text-designColor cursor-pointer"><Link to="test1" spy={true} smooth={true} offset={50} duration={500} >Projects</Link></li>
              <li className="hover:text-designColor cursor-pointer"><Link to="test1" spy={true} smooth={true} offset={50} duration={500} >Resume</Link></li>
              <li className="hover:text-designColor cursor-pointer"><Link to="test1" spy={true} smooth={true} offset={50} duration={500} >Contacts</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}