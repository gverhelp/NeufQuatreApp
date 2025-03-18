import { useState, useEffect, use } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NavigationBar from "./components/Navbar";

import './App.css'

function App() {

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL)
  }, [])

  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<h1>Événements</h1>} />
          <Route path="/staffs" element={<h1>Staffs</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
