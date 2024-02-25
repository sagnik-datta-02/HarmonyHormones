import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/LandingPage'
import FirstPeriodPage from './Pages/FirstPeriodPage'
function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/first-periods" element={<FirstPeriodPage/>}/>
      
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
