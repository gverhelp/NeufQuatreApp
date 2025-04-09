import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './pages/Home/Home';
import Sections from './pages/Sections/Sections';
import BySectionPage from './pages/Sections/BySectionPage';
import AgendaPage from './pages/Agenda/AgendaPage';

import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";


const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {

  return (
    <>
      <Router>

        <ScrollToTop/>

        <NavigationBar/>

        <Routes>

          <Route path="/" element={ <Home/> }/>
          <Route path="/agenda" element={ <AgendaPage/> }/>
          <Route path="/contact" element={ <h1>Contacts</h1> }/>

          <Route path="/sections" element={ <Sections/> }/>
          <Route path="/sections/baladins" element={ <BySectionPage sectionName="Baladins"/> }/>
          <Route path="/sections/lutins" element={ <BySectionPage sectionName="Lutins"/> }/>
          <Route path="/sections/louveteaux" element={ <BySectionPage sectionName="Louveteaux"/> }/>
          <Route path="/sections/guides" element={ <BySectionPage sectionName="Guides"/> }/>
          <Route path="/sections/scouts" element={ <BySectionPage sectionName="Scouts"/> }/>
          <Route path="/sections/pionniers" element={ <BySectionPage sectionName="Pionniers"/> }/>
          <Route path="/sections/clan" element={ <BySectionPage sectionName="Clan"/> }/>
          <Route path="/sections/unité" element={<BySectionPage sectionName="Unité"/> }/>

        </Routes>

        <Footer/>

      </Router>
    </>
  )
}

export default App
