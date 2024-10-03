import React from 'react'
import myResume from '../Assets/Ashish Sharma.pdf'

export default function Resume() {
  return (
    <div>
      <a
        href={myResume}
        download="Ashish Sharma.pdf"
      >
        Resume
      </a>
    </div>
  )
}