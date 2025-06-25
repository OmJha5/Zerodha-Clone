import React from 'react'
import Navbar from '../Navbar.jsx'
import Hero from "./Hero.jsx"
import Awards from "./Awards.jsx"
import Stats from "./Stats.jsx"
import Education from "./Education.jsx"
import OpenAccount from '../OpenAccount.jsx'
import Footer from '../Footer.jsx'
import Pricing from './Pricing.jsx'

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>

    </div>
  )
}
