import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiTask } from 'react-icons/bi';
import { SlGraduation } from 'react-icons/sl';
import { BsChatDots } from 'react-icons/bs';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a
        href='#home'
        aria-label='Home'
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        aria-label='About'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        aria-label='Experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#services'
        aria-label='Services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <BiTask />
      </a>
      <a
        id='menu-qualification'
        href='#qualification'
        aria-label='Qualification'
        onClick={() => setActiveNav('#qualification')}
        className={activeNav === '#qualification' ? 'active' : ''}
      >
        <SlGraduation />
      </a>
      <a
        href='#contact'
        aria-label='Contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BsChatDots />
      </a>
    </nav>
  );
};

export default Nav;
