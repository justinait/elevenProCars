import React from 'react'
import hero from '/cars/hero.jpg'
import hero2 from '/cars/2 mercedesjeep (2).jpg'
import './Hero.css'

function Hero() {
  return (
    <div className='heroContainer'>
      <div className='overlayHero'></div>
      {/* <p className='titleHero'>Eleven Pro Cars</p> */}
      {/* <p className='titleHero'>Mallorca Rental Luxury Cars Agency</p> */}
      <p className='titleHero'>Premium Cars. <br className='mobileOnly' /> Ultimate Comfort. <br className='mobileOnly' /> Unmatched Service.</p>
      {/* <p className='heroText'>Mallorca, Spain</p> */}
    </div>
  )
}

export default Hero