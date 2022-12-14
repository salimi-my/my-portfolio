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
        <h1 className='small-title'>Hello I'm</h1>
        <h2 className='big-title'>Mohamad Salimi</h2>
        <div className='typewriter'>
          <h3 className='text-gradient'>Web Developer</h3>
        </div>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <picture>
            <source srcSet={MEwebp} type='image/webp' />
            <img
              src={MEpng}
              type='image/png'
              width='304'
              height='482'
              alt='me'
            />
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
