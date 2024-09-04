import React from "react";
import MatterCanvas from "../Components/MatterCanvas ";
import { NavLink } from "react-router-dom";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { IoMdSettings } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { RxSun } from "react-icons/rx";

export default function Home() {
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
      <div className="flex flex-col w-16 bg-red-600 gap-4 mt-5 pointer-events-auto">
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
      <div className="w-[71%] m-auto flex items-center bg-teal-500">
        <div className=" text-start bg-yellow-400">
          <p className="uppercase tracking-widest">
            Welcome to my Website
          </p>
          <h1 className="text-6xl font-bold mt-5">Hi, I'm <span className="text-designColor">Ashish Sharma</span></h1>
          <h1 className="text-5xl font-medium mt-3">
            I am a {" "}
            <span className="text-designColor">{text}</span>
            <Cursor cursorColor="red" cursorBlinking="false" />
          </h1>
        </div>
        <div className="fixed top-28 right-8">
          <div className={`cursor-pointer p-3 rounded-full text-xl ${"mode" ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]": "shadow-boxShadowDarkMode"}`}>
            <IoMdSettings />
          </div>
          <div>
            <div className={`cursor-pointer p-3 rounded-full text-xl ${"mode" ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]": "shadow-boxShadowDarkMode"}`}>
              {"mode" ?  <IoMoonOutline className='text-black' /> : <RxSun className='text-white' />  }
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}