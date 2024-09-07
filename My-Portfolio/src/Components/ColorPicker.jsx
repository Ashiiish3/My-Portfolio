import React, { useContext } from 'react'
import { ColorChangeContext } from '../ContextAPI/ContextAPI'

export default function ColorPicker() {
    const {color} = useContext(ColorChangeContext)
    console.log(color)
  return (
    <div>
      
    </div>
  )
}
