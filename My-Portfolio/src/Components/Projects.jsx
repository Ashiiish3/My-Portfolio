import React, { useContext, useState } from "react";
import { projectData } from "../Constant/index";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkSliderBtns from "./WorkSliderBtns";
import { ThemeContext } from "../ContextAPI/ContextAPI";
import { ColorChangeContext } from "../ContextAPI/ContextAPI";
import styled from "styled-components";
import { ProjectImages } from '../Constant/index'

export default function Projects() {
  const { themeChange } = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);
  const [project, setProject] = useState(projectData[0]);
  const handleSlideChange = (swiper) => {
    const currenInd = swiper.activeIndex;
    setProject(projectData[currenInd]);
  };
  return (
    <section id="Projects" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className="max-w-[68%] m-auto py-28 relative">
        <p className="uppercase tracking-widest font-bold" style={{color: colorHandle}}>
          Projects
        </p>
        <ProjectHeading colorhandle={colorHandle} className='pb-5 relative inline-block mt-1 text-5xl font-Montserratt font-[600]' style={{color: themeChange ? "black" : "white"}}>
          My Projects
        </ProjectHeading>
        <div className="mt-10 mb-16 flex justify-between gap-20 relative">
          <div className="h-[2px] absolute left-1/4 right-1/2 top-1/2 -translate-y-1/2" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.Calculator} alt="" className="w-[60%]" />
            </div>
          </div>
          <div className="w-full text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}} >Boat Website Clone</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>The Boat website clone is a fully responsive and modern e-commerce platform designed to mimic the look and functionality of the official Boat website. It showcases various electronic products such as headphones, speakers, wearables, and other accessories. The clone features an interactive product grid, advanced filtering options, detailed product pages with reviews, and a dynamic cart system.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>React JS, Tailwind CSS, HTML 5, CSS 3, Javascript, JSON-Server, Firebase, Firebase Auth, Paypal</h4>
            </div>
          </div>
        </div>
        <div className="mb-16 flex justify-between gap-20 relative">
          <div className="w-full text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}}>Infinite Scroll Project</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This project demonstrates an efficient infinite scrolling interface using React and Tailwind CSS. It allows users to seamlessly browse through a list of items—such as images, without the need for pagination. As users scroll down, new items are automatically fetched and displayed, enhancing the overall user experience.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>React JS, Tailwind CSS, HTML 5, CSS 3, Javascript, JSON-Server</h4>
            </div>
          </div>
          <div className="h-[2px] absolute left-1/2 right-1/4 top-1/2 -translate-y-1/2" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full text-right relative">
            <div>
              <img src={ProjectImages.FlipkartWebsite} alt="" className="w-[60%] inline-block" />
            </div>
          </div>
        </div>
        <div className="mb-16 flex justify-between gap-20 relative">
          <div className="h-[2px] absolute left-1/4 right-1/2 top-1/2 -translate-y-1/2 opacity-70" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.DeathWisCoffeehWebsite} alt="" className="w-[60%]" />
            </div>
          </div>
          <div className="w-full text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}} >Death Wish Coffee Website</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This project is a website inspired by Death Wish Coffee, featuring a dark, bold design that matches the brand's identity. The website is fully responsive, ensuring an optimal viewing experience on both desktop and mobile devices. Products are displayed in a grid format with sorting and filtering options.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>HTML 5, CSS 3, Javascript, Bootstrap, JSON-Server</h4>
            </div>
          </div>
        </div>
        <div className="mb-16 flex justify-between gap-20 relative">
          <div className="w-full text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}}>Flipkart Clone</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This project is an e-commerce website inspired by Flipkart, built using modern web technologies such JavaScript, Bootstrap and JSON-Server. The platform features a responsive and user-friendly interface where Users can create accounts and securely log into Flipkart Website.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>HTML 5, CSS 3, Javascript, JSON-Server, Bootstrap</h4>
            </div>
          </div>
          <div className="h-[2px] absolute left-1/2 right-1/4 top-1/2 -translate-y-1/2" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full text-right relative">
            <div>
              <img src={ProjectImages.FlipkartWebsite} alt="" className="w-[60%] inline-block" />
            </div>
          </div>
        </div>
        <div className="mb-16 flex justify-between gap-20 relative">
          <div className="h-[2px] absolute left-1/4 right-1/2 top-1/2 -translate-y-1/2" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.Calculator} alt="" className="w-[60%]" />
            </div>
          </div>
          <div className="w-full text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}} >Calculator</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This project is a simple and responsive calculator built using HTML, CSS, and JavaScript. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>HTML 5, CSS 3, Javascript</h4>
            </div>
          </div>
        </div>
        <div className="mb-16 flex justify-between gap-20 relative">
          <div className="w-full text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}}>To do List Project</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This is a responsive and user-friendly to-do list application designed to help users manage tasks efficiently. Users can add, edit, and delete tasks while marking them as completed once done. The application is built with a focus on simplicity and ease of use, featuring an intuitive interface that provides real-time feedback on task completion.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>React js, Tailwind CSS, HTML 5, CSS 3, Javascript, JSON-Server</h4>
            </div>
          </div>
          <div className="h-[2px] absolute left-1/2 right-1/4 top-1/2 -translate-y-1/2" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full text-right relative">
            <div>
              <img src={ProjectImages.FlipkartWebsite} alt="" className="w-[60%] inline-block" />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-20 relative">
          <div className="h-[2px] absolute left-1/4 right-1/2 top-1/2 -translate-y-1/2" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.HighTechWebsite} alt="" className="w-[60%]" />
            </div>
          </div>
          <div className="w-full text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}} >HighTech Website Clone</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This project is a clone of HighTech Website that emphasizes the use of advanced technologies and modern design. This term is often associated with sectors that focus on technological innovation, including electronics, computers, and various scientific fields.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>HTML 5, CSS 3, Javascript, Bootstrap, JQuery</h4>
            </div>
          </div>
          
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] w-52 m-auto inline-block opacity-70" style={{backgroundColor: colorHandle}}></div>
        <div className="w-[2px] absolute top-52 bottom-0 left-1/2 -translate-x-1/2 opacity-70" style={{backgroundColor: colorHandle}}></div>
      </div>
    </section>
  );
}

const ProjectHeading = styled.div`
&::after{
  background-color: ${({colorhandle})=>colorhandle};
  content: '';
  height: 3px;
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0%;
  margin: auto;
  opacity: 0.7;
}
`