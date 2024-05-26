import React from 'react'
import logo from '/logo2.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <h1 className='navbarBrand'>Eleven Pro Cars</h1>
      <img src={logo} alt="" className='logoNavbar'/>
      
    </div>
  )
}

export default Navbar