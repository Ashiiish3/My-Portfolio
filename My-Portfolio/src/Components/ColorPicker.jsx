import React, { useContext } from "react";
import { ColorChangeContext } from "../ContextAPI/ContextAPI";
import { ThemeContext } from '../ContextAPI/ContextAPI';

export default function ColorPicker() {
  const { colors, setColorHandle, showColorPicker } = useContext(ColorChangeContext);
  const { themeChange } = useContext(ThemeContext);
  return (
    <div className={`absolute left-20 top-0 transform ${showColorPicker ? "translate-x-0" : "-translate-x-72"} transition-transform duration-300 bg-transparent backdrop-blur rounded-lg px-3 py-2 border-[1px] ${themeChange ? "border-gray-300" : "border-gray-500"}`}>
      <h1 className={`mb-2 text-left text-${themeChange ? "black" : "white"}`}>Change Theme Color :</h1>
      <div className="flex flex-wrap w-60 gap-[9px]">
        {colors.map((color, ind) => (
          <div key={ind} className="h-8 w-8 rounded-full cursor-pointer" style={{backgroundColor: color}} onClick={()=>setColorHandle(color)}></div>
        ))}
      </div>
    </div>
  );
}