import React from 'react'
import logo from '/logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <p className='navbarBrand'>Eleven Pro Cars</p>
      <img src={logo} alt="" className='logoNavbar'/>
      
    </div>
  )
}

export default Navbar