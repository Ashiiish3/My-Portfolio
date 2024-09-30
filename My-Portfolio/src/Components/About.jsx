import React, { useContext } from 'react'
import logo from '../Assets/Images/Logo.png'
import { ColorChangeContext, ThemeContext } from '../ContextAPI/ContextAPI';
import { RxCross2 } from "react-icons/rx";

export default function About() {
  const { themeChange } = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);

  return (
    <section className={`w-[68%] flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-16 px-20 rounded-xl border-[1px] ${themeChange ? "bg-white" : "bg-[#191919]"}`}>
      <div className="flex justify-between m-auto gap-10">
        <button class="absolute top-5 right-5 p-2 bg-red-100 rounded-full">
          <RxCross2 />
        </button>
        <div className="w-[50%] text-start">
          <h1 className='text-2xl font-semibold uppercase' style={{ color: colorHandle }}>About Me</h1>
          <p className="mt-4 tracking-wide text-[17px] leading-6 text-textColor">Hi, I am Ashish Sharma, I can build the front-end portion of websites the part users see and interact with. A dedicated and ambitious Frontend Developer seeking a role in an organization to utilize his skills and experience to contribute to the success of the organization while continuously developing his knowledge and expertise.  and I can also create websites using web languages such as HTML, CSS, JavaScript and React.JS that allow users to access and interact with the site.</p>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="flex p-2 rounded-full">
            <img src={logo} alt={logo} className="brightness-110" />
          </div>
        </div>
      </div>
    </section>
  )
}