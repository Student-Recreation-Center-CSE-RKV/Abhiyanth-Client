import React from 'react'
import Brochure from '../components/sponsers/Broucher'
import GradientBorderComponent from '../components/general/GradientBorderComponet'
import WhatsAbhiyanth from '../components/sponsers/WhatsAbhiyanth'

export default function Sponsers() {
  return (
    <div>
      <WhatsAbhiyanth/>
      <GradientBorderComponent/>
      <div style={{paddingTop:"40px"}}>
      <Brochure />
      </div>
    </div>
  )
}
