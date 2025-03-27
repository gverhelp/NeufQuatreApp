import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Sections from './pages/Sections/Sections';
import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import './App.css'

function App() {

  return (
    <>
      <Router>

        <NavigationBar/>

        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/agenda" element={ <h1>Agenda</h1> }/>
          <Route path="/sections" element={ <Sections/> }/>
          <Route path="/contact" element={ <h1>Contacts</h1> }/>
        </Routes>

        <Footer/>

      </Router>
    </>
  )
}

export default App
