import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cars from './Components/Cars/Cars'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Links from './Components/Links/Links'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AuthContextComponent from './context/AuthContext'
import ForgotPassword from './Components/Register/ForgotPassword'

function App() {

  return (
    <>
    <BrowserRouter>
      <AuthContextComponent>
      <Navbar />
      <Links />

      <Routes className=''>

        <Route path='/' element={< Home />} />
        
        <Route path='/cars' element={<Cars/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        
        
      </Routes>

      <Footer />

      </AuthContextComponent>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
