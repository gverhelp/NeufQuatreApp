import { useState, useEffect, use } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/staff" element={<h1>Page Staff</h1>} />
        <Route path="/events" element={<h1>Événements</h1>} />
        <Route path="/camps" element={<h1>Page Camps</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
        <Route path="/login" element={<h1>Connexion</h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
