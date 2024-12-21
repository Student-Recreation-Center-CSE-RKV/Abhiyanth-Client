import React from 'react'

import Header from '../components/Header';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer'

export default function Main() {
  return (
    <div>
        <Header backgroundcolor="rgba(239, 225, 238, 0.25)" />
        <Outlet />
        <Footer/>
    </div>
  )
}
//rgb(137,112,162,0.8)