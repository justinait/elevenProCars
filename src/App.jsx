import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cars from './Components/Cars/Cars'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Links from './Components/Links/Links'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <BrowserRouter>
        
      <Navbar />
      <Links />

      <Routes className=''>

        <Route path='/' element={< Home />} />
        
        <Route path='/cars' element={<Cars/>} />
        
      </Routes>

      <Footer />

    </BrowserRouter>
      
      
    </>
  )
}

export default App
