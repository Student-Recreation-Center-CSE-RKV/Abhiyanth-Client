import React from 'react'
import Sponser from '../components/home/Sponsers'
import Brochure from '../components/sponsers/Broucher'
import WhatsInAbiyanth from '../components/sponsers/WhatsInAbiyanth'
import GradientBorderComponent from '../components/general/GradientBorderComponet'

export default function Sponsers() {
  return (
    <div style={{paddingTop:"40px"}}>
      <Brochure/>
      <GradientBorderComponent/>
      <WhatsInAbiyanth/>
    </div>
  )
}
