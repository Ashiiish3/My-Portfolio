import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import logo from '../Assets/Images/Logo.png'
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default function Home() {
  const [text] = useTypewriter({
    words: ['Frontend Developer.', 'Backend Developer.'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    // delaySpeed: 2000,
  })
  return (
    <section className="bg-lightBodyColor py-16 border-opacity-100 border-b-gray-300 border-b-[1px]">
      <div className="max-w-[68%] flex justify-between items-center m-auto gap-10">
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
              <span className="BannerIcon">
                <LuLinkedin />
              </span>
              <span className="BannerIcon">
                <FaInstagram />
              </span>
              <span className="BannerIcon">
                <FiTwitter />
              </span>
              <span className="BannerIcon">
                <FiGithub />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="animateBox p-3 rounded-full h-[500px] w-[500px] animate-gradient bg-bannerBgColor">
            <img src={logo} alt={logo} className="brightness-125" />
          </div>
        </div>
      </div>
    </section>
  );
}