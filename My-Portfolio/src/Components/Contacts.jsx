import React, { useContext, useRef, useState } from 'react'
import { ColorChangeContext, ThemeContext } from '../ContextAPI/ContextAPI';
import styled from "styled-components";
import { LuLinkedin } from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { MdOutlinePhone } from "react-icons/md";
import emailjs from '@emailjs/browser';

export default function Contacts() {
  const { themeChange } = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    const service_id = "service_vdl3ybt"
    const template_id = "template_6yi0ccc"
    const publicKey = "BjDb6bIh4VZb74fbm"

    const userObj = {
      from_name: name,
      from_email: email,
      to_name: "Ashish Sharma",
      message: message
    }
    emailjs.send(service_id, template_id, userObj, publicKey)
      .then((res) => {
        alert("Email sent Successfully.")
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="Contact" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className='max-w-[68%] m-auto'>
        <ContactHeading colorhandle={colorHandle} className='pb-5 relative inline-block mt-1 text-5xl font-Montserratt font-[600]' style={{ color: themeChange ? "black" : "white" }}>
          Contact Me
        </ContactHeading>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
          {/* Left Section - Contact Info */}
          <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2 relative left-16">
            {/* Office Location */}
            <div className={`p-6 rounded-lg shadow-lg ${themeChange ? "bg-white" : "bg-gray-800"}`} style={{ color: themeChange ? "black" : "white" }}>
              <div className="text-center text-4xl">
                <LuLinkedin className='m-auto' />
                <h3 className="text-lg font-medium">LinkedIn</h3>
              </div>
            </div>
            {/* Phone Number */}
            <div className={`p-6 rounded-lg shadow-lg ${themeChange ? "bg-white" : "bg-gray-800"}`} style={{ color: themeChange ? "black" : "white" }}>
              <div className="text-center">
                <MdOutlinePhone className="m-auto text-4xl" />
                <h3 className="text-lg font-medium">Phone Number</h3>
                <p>+91 7891541151</p>
              </div>
            </div>
            {/* Fax */}
            <div className={`p-6 rounded-lg shadow-lg ${themeChange ? "bg-white" : "bg-gray-800"}`} style={{ color: themeChange ? "black" : "white" }}>
              <div className="text-center">
                <FaXTwitter className='m-auto text-4xl' />
                <h3 className="text-lg font-medium">Twitter</h3>
              </div>
            </div>
            {/* Email */}
            <div className={`p-6 rounded-lg shadow-lg ${themeChange ? "bg-white" : "bg-gray-800"}`} style={{ color: themeChange ? "black" : "white" }}>
              <div className="text-center">
                <FiGithub className='m-auto text-4xl' />
                <h3 className="text-lg font-medium">Github</h3>
              </div>
            </div>
          </div>
          {/* Right Section - Form */}
          <div className="contact-box w-full lg:w-full p-8 rounded-lg mt-8 lg:mt-0">
            <form className="mt-8 space-y-4 w-[80%] m-auto" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Enter your Name"
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${themeChange ? "bg-white" : "bg-gray-800 border-gray-600"}`}
              />
              <input
                type="email"
                placeholder="Enter a valid email address"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${themeChange ? "bg-white" : "bg-gray-800 border-gray-600"}`}
              />
              <textarea
                placeholder="Your message here"
                rows="4"
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${themeChange ? "bg-white" : "bg-gray-800 border-gray-600"}`}
              ></textarea>
              <input
                type="submit"
                value={"Send"}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
const ContactHeading = styled.div`
&::after{
  background-color: ${({ colorhandle }) => colorhandle};
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