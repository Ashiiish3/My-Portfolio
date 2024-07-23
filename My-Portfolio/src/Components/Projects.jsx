import React, { useState } from "react";
import "swiper/css";
import { projectData } from "../Constant/index";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkSliderBtns from "./WorkSliderBtns";

export default function Projects() {
  const [project, setProject] = useState(projectData[0]);
  const handleSlideChange = (swiper) => {
    const currenInd = swiper.activeIndex;
    setProject(projectData[currenInd]);
  };
  return (
    <section className="bg-lightBodyColor">
      <div className="max-w-[68%] m-auto py-24 border-b-gray-300 border-b-[1px]">
        <p className="uppercase text-designColor tracking-widest font-medium">
          Projects
        </p>
        <h1 className="mt-1 text-6xl font-Montserratt font-[600] text-darkBodyColor">
          My Projects
        </h1>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 flex flex-col justify-center"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-10">
              <div className="w-full xl:w-[50%] text-start">
                <h1 className="number text-8xl leading-none font-bold text-transparent">
                  {project.number}
                </h1>
                <h3 className="mt-4 text-sm lg:text-3xl font-medium">
                  {project.title}
                </h3>
                <p className="mt-3 font-medium text-md tracking-wide font-Montserratt text-textColor">
                  {project.description}
                </p>
                <ul className="flex mt-4 text-designColor font-medium font-Montserratt tracking-wide gap-3">
                  {project.language.map((ele, index) => {
                    return (
                      <li key={index}>
                        {ele.name}{" "}
                        {index !== project.language.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <hr className="my-4 border-gray-400" />
                <div className="flex gap-3">
                  <div className="bg-lightBodyColor shadow-boxShadowLightMode p-3 rounded-full hover:bg-linearGradients hover:text-white">
                    <NavLink
                      className="project-link text-2xl"
                      to={project.projectLink}
                      target="_blank"
                    >
                      <span>
                        <TbExternalLink />
                      </span>
                    </NavLink>
                    <Tooltip anchorSelect=".project-link" place="top">
                      Live Project
                    </Tooltip>
                  </div>
                  <div className="bg-lightBodyColor shadow-boxShadowLightMode p-3 rounded-full hover:bg-linearGradients hover:text-white">
                    <NavLink
                      className="github-link text-2xl"
                      to={project.githubLink}
                      target="_blank"
                    >
                      <span>
                        <FaGithub />
                      </span>
                    </NavLink>
                    <Tooltip anchorSelect=".github-link" place="top">
                      Github Link
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%] bg-red-600">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="w-full bg-yellow-600"
                  onSlideChange={handleSlideChange}
                >
                  <div className="flex flex-row w-full">
                    {projectData.map((oneProject, index) => {
                      return (
                        <SwiperSlide key={index} className="w-full">
                          <div className="w-full h-full group flex justify-center items-center">
                            <img
                              src={project.image}
                              alt=""
                              className="object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                  <WorkSliderBtns
                    containerStyles="z-50 flex gap-5"
                    btnStyles="bg-lightBodyColor shadow-boxShadowLightMode p-2 rounded-full"
                    iconStyles="text-2xl text-designColor"
                  />
                </Swiper>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
