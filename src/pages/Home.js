import React from 'react'
import Sponsers from '../components/Sponsers'
import EventCards from '../components/EventCards'
import HomeStartingComponent from '../components/HomeStartingComponent'
import Extravaganza from '../components/Extravaganza'
export default function Home() {
  return (
    <div>
      <HomeStartingComponent/>
      <Extravaganza/>
      <Sponsers />
    </div>

  )
}
