import React, { useContext, useState } from 'react'
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
      
      <Link to={'/cars'} className='carsNavbar'>Our cars</Link>

      {
        isLogged &&
        <AccountCircleIcon onClick={handleOpen} />

      }
      { (isLogged && open) &&
        <div className='dropdownLogged'>
          {
            (user.rol == "user") ?
            <Link to="/dashboardUsers"><CardGiftcardIcon/>My referrals</Link>
            : 
            <>
              <Link to="/dashboardAdmin"><PersonAddAltIcon/>Add Colaborator</Link>
              <Link to="/dashboardAdminCRUD"><AddCardIcon/>Add Rent</Link>
            </>
          }
          <span className="listItemText" onClick={handleLogOut}><LogoutIcon className="listItemIcon"  />Log out</span>
        </div>  
      }
      
    </div>
  )
}

export default Navbar