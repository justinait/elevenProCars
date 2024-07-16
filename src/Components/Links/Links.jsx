import React, { useContext } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Links.css';
import { ReferenceContext } from '../../context/ReferenceContext';

function Links() {
  const { referenceCode } = useContext(ReferenceContext);

  const formatWhatsAppMessage = () => {
    if (referenceCode) {
      return `Hello! I want to rent a car. RefCode: ${referenceCode}`;
    } else {
      return `Hello! I want to rent a car.`;
    }
  };

  return (
    <div className='linksContainer'>
      {console.log(referenceCode)}
      <a
        className='whatsappLink'
        target='_blank'
        rel='noopener noreferrer'
        href={`https://wa.me/34634187073?text=${encodeURIComponent(formatWhatsAppMessage())}`}
      >
        <WhatsAppIcon className='linksIcons' />
      </a>
    </div>
  );
}

export default Links;
