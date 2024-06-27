import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Hero.css'
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Hero() {
  return (
    <div className='heroDiv'>
      <video src="/home/hero.MOV" className='heroVideo' muted loop autoPlay playsInline ></video>
      {/* <div className='overlayHero'></div> */}
      <div className='heroBox'>

        <p className='getStartedHero animate__animated animate__pulse'>Get started <ArrowForwardIcon/> </p>
        <p className='heroText'> <LocationOnIcon fontSize='small'/> Mallorca, Spain</p>
      </div>
    </div>
  )
}

export default Hero