import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './pages/Home';
import Sections from './pages/Sections';
import BySectionPage from './pages/BySectionPage';
import AgendaPage from './pages/AgendaPage';
import RadioCampBySection from './pages/RadioCampBySection';
import RadioCamps from './pages/RadioCamps';
import NotFound from './pages/NotFound';

import NavigationBar from "./components/Navbar";
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
                <Route path="/infos" element={ <h1>Infos</h1> }/>

                <Route path="/sections" element={ <Sections/> }/>
                <Route path="/sections/baladins" element={ <BySectionPage sectionName="Baladins"/> }/>
                <Route path="/sections/lutins" element={ <BySectionPage sectionName="Lutins"/> }/>
                <Route path="/sections/louveteaux" element={ <BySectionPage sectionName="Louveteaux"/> }/>
                <Route path="/sections/guides" element={ <BySectionPage sectionName="Guides"/> }/>
                <Route path="/sections/scouts" element={ <BySectionPage sectionName="Scouts"/> }/>
                <Route path="/sections/pionniers" element={ <BySectionPage sectionName="Pionniers"/> }/>
                <Route path="/sections/clan" element={ <BySectionPage sectionName="Clan"/> }/>
                <Route path="/sections/unite" element={<BySectionPage sectionName="Unite"/> }/>

                <Route path="/radio-camps" element={ <RadioCamps/> }/>
                <Route path="radio-camps/baladins" element={ <RadioCampBySection sectionName="Baladins"/> }/>
                <Route path="radio-camps/lutins" element={ <RadioCampBySection sectionName="Lutins"/> }/>
                <Route path="radio-camps/louveteaux" element={ <RadioCampBySection sectionName="Louveteaux"/> }/>
                <Route path="radio-camps/guides" element={ <RadioCampBySection sectionName="Guides"/> }/>
                <Route path="radio-camps/scouts" element={ <RadioCampBySection sectionName="Scouts"/> }/>
                <Route path="radio-camps/pionniers" element={ <RadioCampBySection sectionName="Pionniers"/> }/>

                <Route path="*" element={<NotFound/>} />

                </Routes>

                <Footer/>

            </Router>
        </>
    )
}

export default App
