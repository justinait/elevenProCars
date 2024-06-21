import React, { useContext } from 'react'
import './Footer.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import PushPinIcon from '@mui/icons-material/PushPin';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '/public/logonegro2.png'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

function Footer() {
  
  const {user, isLogged} = useContext(AuthContext)

  const downloadPDF = () => {
    const pdfPath = 'https://drive.google.com/file/d/19Drxs_hA-NHrFKU717mxexuMp6hvFPj6/view?usp=sharing';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'CaseStudyBenefit.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='footerContainer'>
      {/* <p>Eleven Pro Cars</p> */}
      <div className='footerContainer3'>
        <img src={logo} alt="" className='logoFooter' />
        <div >
          <p onClick={downloadPDF} style={{cursor: 'pointer', textDecoration: 'underline' }} className=''><DownloadIcon fontSize='medium'/>Download Catalog</p>
          <a className='' style={{cursor: 'pointer', color: 'white' }} target='_blank' href='https://www.instagram.com/elevenpro_cars/'><InstagramIcon fontSize='medium'/>@elevenpro_cars</a>
        </div>
      </div>
      
      <div className='justina'>
        {
          !isLogged &&
          <Link to={'/login'}>Colaborators: click here</Link>
        }
        <p>Powered by &nbsp;<a target='_blank' href="https://imjustwebs.com/"><strong> I'mJustWebs</strong></a></p>

      </div>

    </div>
  )
}

export default Footer