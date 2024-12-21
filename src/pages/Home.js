import React from 'react'
import Sponsers from '../components/home/Sponsers'
import HomeStartingComponent from '../components/home/HomeStartingComponent'
import Extravaganza from '../components/home/Extravaganza'
export default function Home() {
  return (
    <div>
      <HomeStartingComponent/>
      <Extravaganza/>
      <Sponsers />
    </div>

  )
}
