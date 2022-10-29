import React from 'react';
import './header.css';
import CTA from './CTA';
import MEpng from '../../assets/salimi-bw-transparent-min.png';
import MEwebp from '../../assets/salimi-bw-transparent-min.webp';
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
          <picture>
            <source srcSet={MEwebp} type='image/webp' />
            <img src={MEpng} type='image/png' alt='me' />
          </picture>
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
