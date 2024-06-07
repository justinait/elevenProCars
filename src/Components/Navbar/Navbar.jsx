import React from 'react'
import logo from '/logonegro3.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <Link to={'/'} className='navbarBrand'><img src={logo} alt="" className='logoNavbar'/></Link>
      
      {/* <Link to={'/'} className='navbarBrand'>Eleven Pro Cars</Link> */}
      <Link to={'/cars'} className='carsNavbar'>Our cars</Link>
    </div>
  )
}

export default Navbar