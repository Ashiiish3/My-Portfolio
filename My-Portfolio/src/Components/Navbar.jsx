import React from 'react'
import logo from '../Assets/Images/Logo.png'
import {Link} from 'react-scroll'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center bg-lightBodyColor px-12 h-24'>
      <div className='flex justify-between items-center'>
        <img src={logo} alt={logo} height={65} width={65} className='rounded-full border-[3px] border-borderColor' />
        <h2 className='ms-3 text-xl font-medium'>Ashish</h2>
      </div>
      <div>
        <ul className='flex justify-between gap-10 uppercase'>
            <li><Link>Home</Link></li>
            <li><Link>Skills</Link></li>
            <li><Link>Projects</Link></li>
            <li><Link>Resume</Link></li>
            <li><Link>Contacts</Link></li>
        </ul>
        <div>

        </div>
      </div>
    </div>
  )
}
