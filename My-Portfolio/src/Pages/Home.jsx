import React, { useContext } from "react";
import MatterCanvas from "../Components/MatterCanvas ";
import { NavLink } from "react-router-dom";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { IoMdSettings } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { RxSun } from "react-icons/rx";
import { ThemeContext } from "../ContextAPI/ContextAPI";
import { IoSettingsOutline } from "react-icons/io5";

export default function Home() {
  const {themeChange, setThemeChange} = useContext(ThemeContext)
  const [text] = useTypewriter({
    words: ['Frontend Developer.', 'Backend Developer.'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
  })
  return (
    <>
    <MatterCanvas />
    <section className="flex justify-between items-center w-full relative top-24 pointer-events-none h-screen">
      <div className="flex flex-col w-16 ms-2 gap-4 mt-5 pointer-events-auto  -translate-y-24">
          <NavLink to={"https://www.linkedin.com/in/ashish-sharma-b0a6632b0"} target="_blank" className="BannerIcon">
                  <span>
                    <LuLinkedin />
                  </span>
          </NavLink>
          <NavLink to={"https://www.instagram.com/the.ashu_3/?igsh=MTIxdHlhZjF1aG16MQ%3D%3D"} target="_blank" className="BannerIcon">
                  <span>
                    <FaInstagram />
                  </span>
          </NavLink>
          <NavLink className="BannerIcon">
                  <span>
                    <FaXTwitter />
                  </span>
          </NavLink>
          <NavLink to={"https://github.com/Ashiiish3"} className="BannerIcon" target="_blank">
                  <span>
                    <FiGithub />
                  </span>
          </NavLink>
      </div>
      <div className="w-[71%] m-auto flex items-center -translate-y-24">
        <div className="text-start">
          <p className="uppercase tracking-widest" style={{color: themeChange ? "black" : "white"}}>
            Welcome to my Website
          </p>
          <h1 className={`text-6xl font-bold mt-5 ${themeChange ? "text-black": "text-white"}`}>Hi, I'm <span className="text-designColor">Ashish Sharma</span></h1>
          <h1 className="text-5xl font-medium mt-3" style={{color: themeChange ? "black" : "white"}} >
            I am a {" "}
            <span className="text-designColor">{text}</span>
            <Cursor cursorColor="red" cursorBlinking="false" />
          </h1>
          <button className="BannerIcon mt-5 px-6 py-2 font-bold rounded-lg text-lg pointer-events-auto">About me</button>
        </div>
      </div>
        <div className="fixed top-28 right-8 pointer-events-auto -translate-y-none">
          <div className={`cursor-pointer p-3 rounded-full mb-4 text-xl ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]": "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <IoSettingsOutline className="animate-spinSetting" />
          </div>
          <div>
            <div className={`cursor-pointer p-3 rounded-full text-xl ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]": "shadow-boxShadowDarkMode bg-black"}`} onClick={()=>setThemeChange(!themeChange)}>
              {themeChange ?  <IoMoonOutline className='text-black' /> : <RxSun className='text-white' />  }
            </div>
          </div>
        </div>
    </section>
    </>
  );
}