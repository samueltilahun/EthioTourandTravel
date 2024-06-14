import React from 'react'
import "./app.css"
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Admin from './Components/Admin/admin'
import Packages from './Components/Contact/Contact'
import Packages from './Components/About/About'
import Packages from './Components/Packages/Packages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const CombinedLayout = () => (
  <div>
    <Home />
    <Main />
  </div>
);


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<CombinedLayout />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/packages' element={<Packages />}/>
      <Route path='/contact' element={<Packages />}/>
      <Route path='/about' element={<Packages />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
} 

export default App