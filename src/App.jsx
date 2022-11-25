import React, { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Quotes from './components/quotes/Quotes';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Switch from './components/switch/Switch';
import { SwitchContext } from './contexts/SwitchContext';
import './app.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SwitchContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`main-content ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Qualification />
        <Portfolio />
        <Quotes />
        <Contact />
        <Footer />
        <Switch />
      </div>
    </SwitchContext.Provider>
  );
};

export default App;
