import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {
  const [text] = useTypewriter({
    words: ['Frontend Developer.', 'Backend Developer.'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    // delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (
    <div className="bg-lightBodyColor">
      <div className="max-w-[68%] m-auto bg-red-100 divide-x-2">
        <div>
          <p className="uppercase tracking-widest text-textDarkMode">
            Welcome to my Website
          </p>
          <h1>Hi, I'm Ashish Sharma</h1>
          <h1>
            I am a {" "}
            <span className="text-designColor">{text}</span>
            <Cursor cursorColor="red" cursorBlinking="false" />
          </h1>
        </div>
        <div>
          <h2>Ashish Sharma</h2>
        </div>
      </div>
    </div>
  );
}
