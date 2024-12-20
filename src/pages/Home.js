import React from 'react'
import Sponsers from '../components/Sponsers'
import EventCards from '../components/EventCards'
import HomeStartingComponent from '../components/HomeStartingComponent'
export default function Home() {
  return (
    <div>
      <HomeStartingComponent/>
      <EventCards />
      <Sponsers />
    </div>

  )
}
