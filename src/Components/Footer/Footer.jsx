import React from 'react'
import './Footer.css'

function Footer() {
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
      {/* <div className='overlay'></div> */}
      <h2>GET IN TOUCH WITH US</h2>
      <p>For reservations, +34 634 18 70 73 or <strong style={{cursor: 'pointer', textDecoration: 'underline' }}> click here</strong></p>
      <p className='catalog'>If you want to see more, <strong onClick={downloadPDF} style={{cursor: 'pointer', textDecoration: 'underline' }}>download our catalog</strong></p>
      <p>Palma de Mallorca, Spain.</p>
      {/* <p>elevenprocars@gmail.com</p> */}
      <p className='justina'>Powered by <a target='_blank' href="https://imjustwebs.com/"><strong > I'mJustWebs</strong></a></p>
    </div>
  )
}

export default Footer