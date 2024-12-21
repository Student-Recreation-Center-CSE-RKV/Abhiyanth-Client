import React from 'react'
import image1 from "../../assets/images/Abhiyanth Brochure 1.png"
import StatsCard from './StatsCard'

export default function StatsComponent() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <StatsCard 
        image={image1}
        number="03" 
        description="Days" 
      />
      
      
    </div>
  )
}
