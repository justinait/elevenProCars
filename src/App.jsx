import './App.css'
import Cars from './Components/Cars/Cars'
import Hero from './Components/Hero/Hero'
import Home from './Components/Home/Home'
import Links from './Components/Links/Links'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <Home />
      <Links />
      <Cars/>
    </>
  )
}

export default App
