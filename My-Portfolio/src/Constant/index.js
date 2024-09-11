import HTML from '../Assets/Images/HTML-5.png'
import CSS from '../Assets/Images/CSS-3.png'
import JavaScript from '../Assets/Images/JavaScript.png'
import TailwindCss from '../Assets/Images/Tailwind-CSS.png'
import Bootstrap from '../Assets/Images/Bootstrap.png'
import React from '../Assets/Images/React-js.png'
import ViteLogo from '../Assets/Images/Vite-js-logo.png'
import ReactRedux from '../Assets/Images/React-Redux.png'
import JSONServer from '../Assets/Images/JSON-Server.png'
import Firebase from '../Assets/Images/Firebase.png'
import Vercel from '../Assets/Images/Vercel.png'
import DeathWisCoffeehWebsite from '../Assets/Images/Death-wish-coffee-website-image.png'
import FlipkartWebsite from '../Assets/Images/Flipkart-image.jpg'
import PetdogWebsite from '../Assets/Images/Petdog-website-image.jpg'
import HighTechWebsite from '../Assets/Images/HigtTech-image.jpg'
import Calculator from '../Assets/Images/Calculator.jpg'

export const skillsImagesData = [
    {
        id: "S1",
        image:HTML,
        name: "HTML"
    },
    {
        id: "S2",
        image:CSS,
        name: "CSS"
    },
    {
        id: "S3",
        image:JavaScript,
        name: "JavaScript"
    },
    {
        id: "S4",
        image:TailwindCss,
        name: "Tailwind Css"
    },
    {
        id: "S5",
        image:Bootstrap,
        name: "Bootstrap"
    },
    {
        id: "S6",
        image:React,
        name: "React JS"
    },
    {
        id: "S7",
        image:ViteLogo,
        name: "Vite"
    },
    {
        id: "S8",
        image:ReactRedux,
        name: "React-Redux"
    },
    {
        id: "S9",
        image:JSONServer,
        name: "JSON-Server"
    },
    {
        id: "S10",
        image:Firebase,
        name: "Firebase"
    },
    {
        id: "S11",
        image:Vercel,
        name: "Vercel"
    }
]

export const ProjectImages = {
    DeathWisCoffeehWebsite,
    FlipkartWebsite,
    PetdogWebsite,
    HighTechWebsite,
    Calculator
}

export const projectData = [
    {
        number: "01",
        title: "Death Wish Coffee Website",
        description: "This project is clone of Death wish coffee website which is a coffee brand based in the United States. Their coffee is primarily sold online, but can also be found in grocery stores across the United States.",
        language: [{name: "HTML 5"}, {name: "CSS 3"}, {name:"Javascript"},{name:"Bootstrap"},{name:"JSON-Server"}],
        image: DeathWisCoffeehWebsite,
        projectLink: "https://death-wish-coffee-website.vercel.app/",
        githubLink: "https://github.com/Ashiiish3/Death-Wish-Coffee-Clone"
    },
    {
        number: "02",
        title: "Flipkart Clone",
        description: "This project is clone of Flipkart website India's biggest online store for Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Home, Furniture, Grocery, Jewelry, Sporting goods etc.",
        language: [{name: "HTML 5"}, {name: "CSS 3"}, {name:"Javascript"},{name:"JSON-Server"},{name:"Bootstrap"}],
        image: FlipkartWebsite,
        projectLink: "https://flipkart-clone-pi-vert.vercel.app/",
        githubLink: "https://github.com/Ashiiish3/Flipkart-Clone"
    },
    {
        number: "03",
        title: "Veterinarian Website",
        description: "A veterinarian website typically refers to an online platform that provides information, resources, and services related to veterinary medicine and animal care.",
        language: [{name: "HTML 5"}, {name: "CSS 3"}, {name:"Javascript"},{name:"Bootstrap"}],
        image: PetdogWebsite,
        projectLink: "https://pethealth-website.000webhostapp.com/",
        githubLink: "https://github.com/Ashiiish3/AS-Websites/tree/main/Dog%20Hospital%20Website"
    },
    {
        number: "04",
        title: "HighTech Website Clone",
        description: "This project is a clone of HighTech Website that emphasizes the use of advanced technologies and modern design. This term is often associated with sectors that focus on technological innovation, including electronics, computers, and various scientific fields.",
        language: [{name: "HTML 5"}, {name: "CSS 3"}, {name:"Javascript"},{name:"Bootstrap"},{name:"JQuery"}],
        image: HighTechWebsite,
        projectLink: "https://as-hightech.000webhostapp.com/",
        githubLink: "https://github.com/Ashiiish3/AS-Websites/tree/main/HighTech%20Website%20Template"
    }
]