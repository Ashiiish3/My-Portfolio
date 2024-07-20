import React from "react";
import { skillsImagesData } from "../Constant/index";

export default function Skills() {
  return (
    <section id="Skills" className="py-24 bg-lightBodyColor">
      <div className="max-w-[68%] m-auto">
        <p className="uppercase text-designColor tracking-widest">Skills</p>
        <h1 className="mt-1 text-6xl font-Montserratt font-[600] text-darkBodyColor">
          What I know
        </h1>
        <div className="flex justify-between flex-wrap mt-16 gap-14">
          {skillsImagesData.map((skill) => (
            <div key={skill.id} className="h-72 w-72 p-5 shadow-xl">
              <div className="h-52">
                <img src={skill.image} alt=""/>
              </div>
              <h1>{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
