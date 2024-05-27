import React from 'react'
// import image from '/cars/azul maclaren(1).jpg'
import image3 from '/cars/hero.jpg'
// import image4 from '/cars/mercedes deportivo gris.jpg'
import image4 from '/cars/VolanteMercedes3.jpg'
import image from '/cars/maclarennaranja (1).jpg'
import image5 from '/cars/2Backmercedesjeep (1).jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import './Home.css'

function Home() {
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
    <div>
        <div className='homeContainerDiv'>
            <p className='ourFocus'>OUR FOCUS</p>
            <p className='ourFocusText'>We aim to provide our clients with a unique and exclusive service, offering 
                luxury cars at your convenience. <br /> <strong>Whenever and wherever you need them.</strong></p>
        </div>
        <div className='homeDiv'>

            <div className='homeImageContainer'>
                <div className='overlay'></div>
                <p className='homeImagePhrase'>Let's get you on the road.<br /> Expertise. Commitment. Value.</p>
                <img src={image3} alt="" className='homeServicesImage mobileOnly'/>
                <img src={image5} alt="" className='homeServicesImage desktopOnly'/>
            </div>

            {/* <p className='ourFocus ourServices'>OUR SERVICES</p> */}
            <div className='aboutDiv'>
                <div className='overlay darkerOverlay'></div>
                <div className='aboutDivContainer'>
                    <p className='ourFocus'>ABOUT US</p>
                    <div className='aboutInfoContainer'>
                        <div>
                            <div>
                                <p className='aboutUsTitles'><LocationOnIcon fontSize='small'/> Where?</p>
                                <p>Airports, Hotels, or
                                wherever you need in
                                Palma de Mallorca, Spain
                                </p>
                            </div>
                            <div>
                                <p className='aboutUsTitles'><InstagramIcon fontSize='small'/>Instagram</p>
                                <a style={{cursor: 'pointer', color: 'white' }} target='_blank' href='https://wa.link/qva9cx'>@elevenpro_cars</a>
                            </div>
                            
                            <div>
                                <p className='aboutUsTitles'><DownloadIcon fontSize='small'/>Catalog</p>
                                <p onClick={downloadPDF} 
                                style={{cursor: 'pointer', textDecoration: 'underline' }}> Download here</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className='aboutUsTitles'><CalendarMonthIcon fontSize='small'/>Reservations</p>
                                <p> <a  style={{cursor: 'pointer', textDecoration: 'underline', color: 'white' }} target='_blank' href='https://wa.link/qva9cx'> click here</a> or <br />+34 634 18 70 73</p>
                            </div>
                            <div>
                                <p className='aboutUsTitles'><LoyaltyIcon fontSize='small'/>Why us?</p>
                                <ul> 
                                    <li>Reservations at nightclubs and Restaurants.</li>
                                    <li>Logistics for easy parking in high-demand areas</li>
                                    <li>Unforgettable unique experience.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* <img className='homeServicesImage mobileOnly' src={image4} alt="" />
                <img className='homeServicesImage desktopOnly' src={image} alt="" /> */}
                {/*<div className='homeImagePhrase homeImagePhraseTablet'>
                    <p className='homeImageP'>Unforgettable Unique Experience. </p>
                    <p className='homeImageP'>Reservations at Nightclubs and Restaurants.</p>
                    <p className='homeImageP'>Logistics for Easy Parking in High-Demand Areas.</p>
                </div> */}
            </div>

        </div>
    </div>
  )
}

export default Home