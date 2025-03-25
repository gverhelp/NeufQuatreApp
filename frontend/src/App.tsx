// import { useState, useEffect, use } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import './App.css'

function App() {

  // useEffect(() => {
  //   console.log(import.meta.env.VITE_API_URL)
  // }, [])

  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<h1>Agenda</h1>} />
          <Route path="/sections" element={<h1>Sections</h1>} />
          <Route path="/contact" element={<h1>Contacts</h1>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
