import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiTask } from 'react-icons/bi';
import { SlGraduation } from 'react-icons/sl';
import { BsChatDots } from 'react-icons/bs';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

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
        data-for='expertiseBtn'
        href='#expertise'
        aria-label='Expertise'
        onClick={() => setActiveNav('#expertise')}
        className={activeNav === '#expertise' ? 'active' : ''}
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

      <Tooltip
        id='homeBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Home
      </Tooltip>
      <Tooltip
        id='aboutBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        About
      </Tooltip>
      <Tooltip
        id='experienceBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Experience
      </Tooltip>
      <Tooltip
        id='expertiseBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Expertise
      </Tooltip>
      <Tooltip
        id='qualificationBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Qualification
      </Tooltip>
      <Tooltip
        id='contactBtn'
        place='top'
        type='dark'
        effect='solid'
        className='tooltip'
        backgroundColor='rgba(0, 0, 0, 0.3)'
        arrowColor='rgba(0, 0, 0, 0)'
      >
        Contact
      </Tooltip>
    </nav>
  );
};

export default Nav;
