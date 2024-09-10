import React, { useContext, useState } from "react";
import { projectData } from "../Constant/index";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkSliderBtns from "./WorkSliderBtns";
import "swiper/css";
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
      <div className="max-w-[68%] m-auto py-28 mb-32 border-b-gray-300 border-b-[1px] relative">
        <p className="uppercase tracking-widest font-bold" style={{color: colorHandle}}>
          Projects
        </p>
        <ProjectHeading colorhandle={colorHandle} className='pb-5 relative inline-block mt-1 text-5xl font-Montserratt font-[600]' style={{color: themeChange ? "black" : "white"}}>
          My Projects
        </ProjectHeading>
        <div className="mt-10 mb-8 flex justify-between gap-20 relative">
          <div className="h-[2px] absolute left-1/4 right-1/2 top-1/2 -translate-y-1/2 opacity-70" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.DeathWisCoffeehWebsite} alt="" className="w-[60%]" />
            </div>
          </div>
          <div className="w-full bg-orange-600 text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}} >Death Wish Coffee Website</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This project is clone of Death wish coffee website which is a coffee brand based in the United States. Their coffee is primarily sold online, but can also be found in grocery stores across the United States.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>HTML 5, CSS 3, Javascript, Bootstrap, JSON-Server</h4>
            </div>
          </div>
        </div>
        <div className="mb-8 flex justify-between gap-20 relative">
          <div className="w-full bg-red-500 text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}} >Death Wish Coffee Website</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This project is clone of Death wish coffee website which is a coffee brand based in the United States. Their coffee is primarily sold online, but can also be found in grocery stores across the United States.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>HTML 5, CSS 3, Javascript, Bootstrap, JSON-Server</h4>
            </div>
          </div>
          <div className="h-[2px] absolute left-1/2 right-1/4 top-1/2 -translate-y-1/2" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full bg-yellow-600 text-right relative">
            <div>
              <img src={ProjectImages.DeathWisCoffeehWebsite} alt="" className="w-[60%] inline-block" />
            </div>
          </div>
        </div>
        <div className="mb-8 flex justify-between gap-20 relative">
          <div className="h-[2px] absolute left-1/4 right-1/2 top-1/2 -translate-y-1/2" style={{backgroundColor: colorHandle}}></div>
          <div className="h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle}}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.DeathWisCoffeehWebsite} alt="" className="w-[60%]" />
            </div>
          </div>
          <div className="w-full bg-orange-600 text-left">
            <div>
              <h1 className="text-3xl font-bold mb-3" style={{color: themeChange ? "black" : "white"}} >Death Wish Coffee Website</h1>
              <p className="text-[17px] mb-3" style={{color: themeChange ? "black" : "white"}}>This project is clone of Death wish coffee website which is a coffee brand based in the United States. Their coffee is primarily sold online, but can also be found in grocery stores across the United States.</p>
              <h4 className="tracking-widest text-[17px]" style={{color: colorHandle}}>HTML 5, CSS 3, Javascript, Bootstrap, JSON-Server</h4>
            </div>
          </div>
        </div>
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