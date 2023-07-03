import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Expertise from './components/expertise/Expertise';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Quotes from './components/quotes/Quotes';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Switch from './components/switch/Switch';
import { SwitchContext } from './contexts/SwitchContext';
import './app.css';

const App = () => {
  const myStorage = window.localStorage;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (myStorage.getItem('darkMode') === 'true') setDarkMode(true);
  }, [myStorage, setDarkMode]);

  return (
    <SwitchContext.Provider value={{ darkMode, setDarkMode, myStorage }}>
      <div className={`main-content ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Expertise />
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
