import React, { useContext } from "react";
import { MatterCanvas } from "../Components/MatterCanvas ";
import { NavLink } from "react-router-dom";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { IoMoonOutline } from "react-icons/io5";
import { RxSun } from "react-icons/rx";
import { ColorChangeContext, ThemeContext } from "../ContextAPI/ContextAPI";
import { IoSettingsOutline } from "react-icons/io5";
import ColorPicker from "../Components/ColorPicker";

export default function Home() {
  const { themeChange, setThemeChange } = useContext(ThemeContext)
  const { colorHandle, showColorPicker, setShowColorPicker } = useContext(ColorChangeContext);
  const WriteName = {
    words: ['Frontend Developer.', 'Backend Developer.'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
  }
  const [text] = useTypewriter(WriteName)

  return (
    <div id="Home" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className="hidden md:block">
        <MatterCanvas />
      </div>
      <section className="flex justify-between items-center w-full relative top-24 pointer-events-none h-screen">
        <div className="flex flex-col w-16 ms-2 gap-4 mt-5 pointer-events-auto  -translate-y-24">
          <NavLink to={"https://www.linkedin.com/in/ashish-sharma-b0a6632b0"} target="_blank" className={`BannerIcon ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <span>
              <LuLinkedin />
            </span>
          </NavLink>
          <NavLink to={"https://www.instagram.com/the.ashu_3/?igsh=MTIxdHlhZjF1aG16MQ%3D%3D"} target="_blank" className={`BannerIcon ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <span>
              <FaInstagram />
            </span>
          </NavLink>
          <NavLink className={`BannerIcon ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <span>
              <FaXTwitter />
            </span>
          </NavLink>
          <NavLink to={"https://github.com/Ashiiish3"} target="_blank" className={`BannerIcon ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <span>
              <FiGithub />
            </span>
          </NavLink>
        </div>
        <div className="w-[71%] m-auto flex items-center -translate-y-24">
          <div className="text-start">
            <p className="uppercase tracking-widest text-[12px] md:text-[16px]" style={{ color: themeChange ? "black" : "white" }}>
              Welcome to my Website
            </p>
            <h1 className={`text-2xl md:text-6xl font-bold mt-3 ${themeChange ? "text-black" : "text-white"}`}>Hi, I'm <span style={{ color: `${colorHandle}` }}>Ashish Sharma</span></h1>
            <h1 className="text-2xl md:text-5xl font-medium md:mt-3" style={{ color: themeChange ? "black" : "white" }} >
              I am a {" "}
              <span style={{ color: colorHandle }}>{text}</span>
              <Cursor cursorColor={`${colorHandle}`} cursorBlinking="false" />
            </h1>
            <button className={`BannerIcon ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} mt-5 px-6 py-2 font-semibold rounded-lg text-[17px] md:text-lg pointer-events-auto`}>About me</button>
          </div>
        </div>
        <div className="fixed top-28 right-8 pointer-events-auto -translate-y-none z-10">
          <div className={`cursor-pointer p-3 rounded-full mb-4 text-xl transform ${showColorPicker ? "translate-x-0" : "-translate-x-[270px]"} transition-transform duration-300 ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`} onClick={() => setShowColorPicker(!showColorPicker)}>
            <IoSettingsOutline className="animate-spinSetting" />
          </div>
          <ColorPicker />
          <div>
            <div className={`cursor-pointer p-3 rounded-full text-xl transform ${showColorPicker ? "translate-x-0" : "-translate-x-[270px]"} transition-transform duration-300 ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black"}`} onClick={() => setThemeChange(!themeChange)}>
              {themeChange ? <IoMoonOutline className='text-black' /> : <RxSun className='text-white' />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}