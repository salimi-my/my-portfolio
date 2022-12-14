import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiTask } from 'react-icons/bi';
import { SlGraduation } from 'react-icons/sl';
import { BsChatDots } from 'react-icons/bs';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a
        data-tip
        data-for='homeBtn'
        href='#home'
        aria-label='Home'
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        data-tip
        data-for='aboutBtn'
        href='#about'
        aria-label='About'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        data-tip
        data-for='experienceBtn'
        href='#experience'
        aria-label='Experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        data-tip
        data-for='servicesBtn'
        href='#services'
        aria-label='Services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <BiTask />
      </a>
      <a
        data-tip
        data-for='qualificationBtn'
        id='menu-qualification'
        href='#qualification'
        aria-label='Qualification'
        onClick={() => setActiveNav('#qualification')}
        className={activeNav === '#qualification' ? 'active' : ''}
      >
        <SlGraduation />
      </a>
      <a
        data-tip
        data-for='contactBtn'
        href='#contact'
        aria-label='Contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BsChatDots />
      </a>

      <ReactTooltip
        id='homeBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Home
      </ReactTooltip>
      <ReactTooltip
        id='aboutBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        About
      </ReactTooltip>
      <ReactTooltip
        id='experienceBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Experience
      </ReactTooltip>
      <ReactTooltip
        id='servicesBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Services
      </ReactTooltip>
      <ReactTooltip
        id='qualificationBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Qualification
      </ReactTooltip>
      <ReactTooltip
        id='contactBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Contact
      </ReactTooltip>
    </nav>
  );
};

export default Nav;
