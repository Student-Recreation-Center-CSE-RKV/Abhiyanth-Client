import React from 'react'
import Sponsers from '../components/home/Sponsers'
import HomeStartingComponent from '../components/home/HomeStartingComponent'
import Extravaganza from '../components/home/Extravaganza'
import { useState } from 'react'
import LaunchPage from './LaunchPage'

export default function Home() {
  const [flag, setFlag] = useState(false);
  return (
    <div>
			{flag ? (
				<div>
        <HomeStartingComponent/>
        <Extravaganza/>
        <Sponsers />
      </div>
			) : (
				<LaunchPage setFlag={setFlag} /> 
			)}
		</div>
    

  )
}
