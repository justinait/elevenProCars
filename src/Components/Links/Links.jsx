import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import './Links.css'

function Links() {
  return (
    <div className='linksContainer'>
      <a className='whatsappLink' target='_blank' href='wa.link/qva9cx'>
        <WhatsAppIcon className='linksIcons'/>
      </a>
    </div>
  )
}

export default Links