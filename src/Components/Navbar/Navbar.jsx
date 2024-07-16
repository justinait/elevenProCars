import React, { useContext, useEffect, useState } from 'react'
import logo from '/logonegro3.png'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from '../../context/AuthContext';
import { onLogOut } from "../../firebaseConfig";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddCardIcon from '@mui/icons-material/AddCard';

function Navbar() {
  
  const {handleLogoutAuth, isLogged, user} = useContext(AuthContext)
  let navigate = useNavigate()
  const [open, setOpen] = useState(false)
 
  const handleLogOut = () => {
    onLogOut();
    handleLogoutAuth()
    navigate('/login')
  }
  
  const handleOpen =()=> {
    setOpen(!open);
  }

  return (
    <div className='navbarContainer'>
      <Link to={'/'} className='navbarBrand'><img src={logo} alt="" className='logoNavbar'/></Link>
      <div>

      <Link to={'/cars'} className='carsNavbar'>Our cars</Link>

      {
        isLogged &&
        <AccountCircleIcon className='accountIcon icons' onClick={handleOpen} />

      }
      { (isLogged && open) &&
        <div className='dropdownLogged'>
          {
            (user.rol == "user") ?
            <Link to="/dashboardUsers"><CardGiftcardIcon className='icons'/>My referrals</Link>
            : 
            <>
              <Link to="/dashboardAdmin"><PersonAddAltIcon className='icons'/>Add Colaborator</Link>
              <Link to="/dashboardAdminCRUD"><AddCardIcon className='icons'/>Add Rent</Link>
            </>
          }
          <span className="listItemText" onClick={handleLogOut}><LogoutIcon className="listItemIcon icons"  />Log out</span>
        </div>  
      }
      </div>
      
    </div>
  )
}

export default Navbar