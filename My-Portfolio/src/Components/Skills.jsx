import React, { useContext } from "react";
import { skillsImagesData } from "../Constant/index";
import { ColorChangeContext, ThemeContext } from "../ContextAPI/ContextAPI";

export default function Skills() {
  const {themeChange} = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);
  return (
    <section id="Skills" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className="max-w-[68%] m-auto py-28">
        <p className="uppercase tracking-widest font-bold" style={{color: colorHandle}}>Skills</p>
        <h1 className="mt-1 text-5xl font-Montserratt font-[600]" style={{color: themeChange ? "black" : "white"}}>
          What I know
        </h1>
        <div className="grid grid-cols-3 mt-12 gap-10">
          {skillsImagesData.map((skill) => (
            <div key={skill.id} className={`skill-box py-5 bg-transparent rounded-full hover:border-[1px] hover:border-${colorHandle}`} style={{boxShadow: `0px 0px 8px -2px ${colorHandle}`}}>
              <div className="skill-images">
                <img src={skill.image} alt=""/>
              </div>
              <h1 className="mt-5 text-2xl" style={{color: themeChange ? "black" : "white"}}>{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
