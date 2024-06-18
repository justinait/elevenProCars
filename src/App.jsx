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
import DashboardUsers from './Components/DashboardUsers/DashboardUsers'
import DashboardAdmin from './Components/DashboardAdmin/DashboardAdmin'
import ProtectedAdmin from './ProtectedAdmin'
import ProtectedUsers from './ProtectedAdmin'
import DashboardAdminCRUD from './Components/DashboardAdmin/DashboardAdminCRUD'

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
        
        <Route element={<ProtectedAdmin />}>
          <Route path='/dashboardAdmin' element={<DashboardAdmin />} />
          <Route path='/dashboardAdminCRUD' element={<DashboardAdminCRUD />} />
        </Route>
        
        <Route element={<ProtectedUsers />}>
          <Route path='/dashboardUsers' element={<DashboardUsers />} />
        </Route>
        

        
      </Routes>

      <Footer />

      </AuthContextComponent>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
