import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/LandingPage'
import FirstPeriodPage from './Pages/FirstPeriodPage'
import MenstrupediaPage from './Pages/MenstruPediaPage';
function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/first-periods" element={<FirstPeriodPage/>}/>
      <Route path="/menstrupedia" element={<MenstrupediaPage/>}/>
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
