import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import logo from '../Assets/Images/Logo.png'
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

export default function About() {
    const [text] = useTypewriter({
        words: ['Frontend Developer.', 'Backend Developer.'],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
      })
  return (
    <section className="bg-lightBodyColor h-[89vh] flex">
      <div className="max-w-[68%] flex justify-between items-center m-auto gap-10 py-[108px] border-b-gray-300 border-b-[1px]">
        <div className="w-[50%] text-start">
          <p className="uppercase tracking-widest">
            Welcome to my Website
          </p>
          <h1 className="text-6xl font-medium mt-5">Hi, I'm Ashish Sharma</h1>
          <h1 className="text-5xl font-medium mt-3">
            I am a {" "}
            <span className="text-designColor">{text}</span>
            <Cursor cursorColor="red" cursorBlinking="false" />
          </h1>
          <p className="mt-5 tracking-wide text-[17px] leading-6 text-textColor">I can  build the front-end portion of websites the part users see and interact with. and I can also create websites using web languages such as HTML, CSS, JavaScript and React.JS that allow users to access and interact with the site.</p>
          <div>
            <p className="uppercase text-textColor text-[14px] font-medium tracking-widest mt-14">You can find me</p>
            <div className="flex gap-4 mt-5">
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
            <div className="BannerIcon mt-6 w-72">
              <span className="flex items-center justify-evenly m-auto">Download Resume <LuDownload /></span>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="flex p-4 rounded-full h-[600px] w-[600px] bg-200% animate-moveGradient bg-bannerBgColor">
            <img src={logo} alt={logo} className="brightness-125" />
          </div>
        </div>
      </div>
    </section>
  )
}
