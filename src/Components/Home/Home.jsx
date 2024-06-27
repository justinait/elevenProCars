import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import Starred from '../Starred/Starred'
import Services from '../Services/Services'

function Home() {
  return (
    <div>
      <Hero/>
      <div className='homeContainerDiv'>
        <p className='ourFocus'>OUR FOCUS</p>
        <p className='ourFocusText'>
          We aim to provide our clients with a unique and exclusive service, offering 
          luxury cars at your convenience. <br /> <strong>Whenever and wherever you need them.</strong>
        </p>
      </div>
      
      <Services />
      <Starred />

    </div>
  )
}

export default Home