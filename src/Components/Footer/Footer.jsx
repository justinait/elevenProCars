import React, { useContext } from 'react'
import './Footer.css'
import DownloadIcon from '@mui/icons-material/Download';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import PinDropIcon from '@mui/icons-material/PinDrop';
import logo from '/public/logonegro2.png'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentsIcon from '@mui/icons-material/Payments';
import Payment from '../Payment/Payment';
import visa from '/public/home/visa.svg'
import master from '/public/home/mastercard.svg'
import amex from '/public/home/amex.svg'
import redsys from '/public/home/Redsys.jpg'
import dolar from '/public/home/dolar.png'


function Footer() {
  
  const {user, isLogged} = useContext(AuthContext)

  const openPDF = () => {
    const pdfPath = '/Eleven Pro Cars catalogo 2024.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='footerContainer'>
      
      <div className='footerContainer3'>
        <img src={logo} alt="" className='logoFooter' />
        <div>
          <p onClick={openPDF} style={{cursor: 'pointer', textDecoration: 'underline' }} className='footerItemsContact'><DownloadIcon className='footerIcons'/>Download Catalog</p>
          <a className='footerItemsContact' style={{cursor: 'pointer', color: 'white' }} target='_blank'  rel="noopener noreferrer" href='https://www.instagram.com/elevenpro_cars/'><InstagramIcon className='footerIcons'/>@elevenpro_cars</a>

          <p className='footerItemsContact' style={{cursor: 'pointer', color: 'white' }}><PhoneIcon className='footerIcons'/>+34 634 18 70 73</p>
          <p className='footerItemsContact' style={{cursor: 'pointer', color: 'white' }}><PinDropIcon className='footerIcons'/>Mallorca, Islas Baleares, 07015</p>

        </div>
      </div>
      <br /><br />
      
      <div className='footerPaymentMethods'>
        <p>All payment methods accepted</p>
        <div>
          {/* <CreditCardIcon className='footerIcons' /> <AttachMoneyIcon className='footerIcons' /> <PaymentsIcon className='footerIcons' /> */}
          <img src={redsys} alt="redsys" className='footerIconsCard' />
          <img src={master} alt="Mastercard" className='footerIconsCard' />
          <img src={visa} alt="visa" className='footerIconsCard' />
          <img src={amex} alt="amex" className='footerIconsCard' />
          <img src={dolar} alt="dolar" className='footerIconsCard' />

        </div>
        <Payment/>
      </div>
      

      <div className='justina'>
        {
          !isLogged &&
          <Link to={'/login'}>Colaborators: click here</Link>
        }
        <p>Powered by &nbsp;<a target='_blank'  rel="noopener noreferrer" href="https://imjustwebs.com/"><strong> I'mJustWebs</strong></a></p>

      </div>

    </div>
  )
}

export default Footer