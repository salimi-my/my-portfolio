import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/salimi-bw-transparent-min.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Mohamad Salimi</h1>
        <div className='typewriter'>
          <h3 className='text-gradient'>Web Developer</h3>
        </div>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <div className='mouse'></div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
