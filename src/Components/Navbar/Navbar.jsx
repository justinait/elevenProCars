import React from 'react'
import logo from '/logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <img src={logo} alt="" className='logoNavbar'/>
      <div className='rightNavbar'>
        <p className='rightNavbarItem'>Services</p>
        <p className='rightNavbarItem'>Cars</p>
      </div>
    </div>
  )
}

export default Navbar