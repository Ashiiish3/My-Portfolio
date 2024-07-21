import React from "react";
import {projectData} from '../Constant/index'
import { NavLink } from "react-router-dom";

export default function Projects() {
    console.log(projectData)
  return (
    <section className="bg-lightBodyColor">
      <div className="max-w-[68%] m-auto py-24 bg-lightBodyColor border-b-gray-300 border-b-[1px]">
        <p className="uppercase text-designColor tracking-widest font-medium">Projects</p>
        <h1 className="mt-1 text-6xl font-Montserratt font-[600] text-darkBodyColor">
          My Projects
        </h1>
        <div className="mt-12">
            {projectData.map((project)=>(
                <div className="grid grid-cols-2 gap-8">
                    <div className="text-left">
                        <h1 className="number text-9xl font-bold text-transparent">{project.id}</h1>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p>{project.languageName}</p>
                        <hr />
                        <div>
                            <NavLink>Project Link</NavLink>
                            <NavLink>github link</NavLink>
                        </div>
                    </div>
                    <div><img src={project.image} alt="" /></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}