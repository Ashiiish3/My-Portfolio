import React from "react";
import { skillsImagesData } from "../Constant/index";

export default function Skills() {
  return (
    <section id="Skills" className="bg-lightBodyColor">
      <div className="max-w-[68%] m-auto py-24 border-b-gray-300 border-b-[1px]">
        <p className="uppercase text-designColor tracking-widest font-medium">Skills</p>
        <h1 className="mt-1 text-6xl font-Montserratt font-[600] text-darkBodyColor">
          What I know
        </h1>
        <div className="grid grid-cols-3 mt-12 gap-10">
          {skillsImagesData.map((skill) => (
            <div key={skill.id} className="py-5 bg-white shadow-xl">
              <div className="skill-images">
                <img src={skill.image} alt=""/>
              </div>
              <h1 className="mt-5 text-2xl">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
