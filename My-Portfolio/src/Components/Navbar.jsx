import React, { useContext } from 'react'
import logo from '../Assets/Images/Logo.png'
import { Link } from 'react-scroll'
import { ColorChangeContext, ThemeContext } from '../ContextAPI/ContextAPI';
import styled from 'styled-components';

export default function Navbar() {
  const {themeChange} = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);
  return (
    <div className={`fixed w-full backdrop-blur-md flex top-0 z-10 px-12 h-24 border-opacity-100 ${themeChange ? "border-b-gray-300" : "border-b-gray-500"} border-b-[1px]`} >
      <div className='max-w-[72%] w-full flex justify-between items-center m-auto'>
        <div className=' flex justify-between items-center'>
          <div className={`rounded-full border-[3px] ${themeChange ? "border-borderColor" : "border-[#494949]"}`}>
            <img src={logo} alt={logo} height={65} width={65} className='rounded-full brightness-110' />
          </div>
          <h2 className={`ms-3 text-xl font-medium ${themeChange ? "text-black" : "text-textDarkMode"}`}>Ashish</h2>
        </div>
        <div className='flex justify-between items-center gap-12'>
          <ul className={`flex justify-between gap-14 uppercase ${themeChange ? "text-black": "text-white"} font-semibold`}>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="Home" spy={true} smooth={true} offset={0} duration={500} >Home</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="Skills" spy={true} smooth={true} offset={0} duration={500} >Skills</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="Projects" spy={true} smooth={true} offset={0} duration={500} >Projects</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="GithubStatus" spy={true} smooth={true} offset={0} duration={500} >Github Status</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="Contact" spy={true} smooth={true} offset={0} duration={500} >Contacts</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="test1" spy={true} smooth={true} offset={0} duration={500} >Resume</Link></NavItem>
          </ul>
        </div>
      </div>
    </div>
  )
}
const NavItem = styled.div`
&:hover {
    color: ${({colorhandle})=> colorhandle };
`;