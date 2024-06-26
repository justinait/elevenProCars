import React from 'react'
import hero from '/cars/hero.jpg'
import './Hero.css'

function Hero() {
  return (
    <div className='heroContainer'>
      {/* <div className='overlayHero'></div> */}
      {/* <p className='titleHero'>Mallorca Rental Luxury Cars Agency</p> */}
      <p className='heroText'>Mallorca, Spain</p>
    </div>
  )
}

export default Hero