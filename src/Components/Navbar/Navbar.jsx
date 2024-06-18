import React, { useContext } from 'react'
import logo from '/logonegro3.png'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from '../../context/AuthContext';
import { onLogOut } from "../../firebaseConfig";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  
  const {handleLogoutAuth, isLogged} = useContext(AuthContext)
  let navigate = useNavigate()

  const handleLogOut = () => {
    onLogOut();
    handleLogoutAuth()
    navigate('/login')
  }
  

  return (
    <div className='navbarContainer'>
      <Link to={'/'} className='navbarBrand'><img src={logo} alt="" className='logoNavbar'/></Link>
      
      <Link to={'/cars'} className='carsNavbar'>Our cars</Link>

      {
        isLogged &&
        <span className="listItemText" onClick={handleLogOut}><LogoutIcon className="listItemIcon"  /></span>
      }  
      
    </div>
  )
}

export default Navbar