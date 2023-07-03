import './header.css';
import Cta from './Cta';
import MEpng from '../../assets/web-developer-min.png';
import MEwebp from '../../assets/web-developer-min.webp';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h1 className='small-title'>Hello, I am</h1>
        <a href='/'>
          <h2 className='big-title'>Mohamad Salimi</h2>
        </a>
        <div className='typewriter'>
          <h3 className='text-gradient'>Web Developer</h3>
        </div>
        <Cta />
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
