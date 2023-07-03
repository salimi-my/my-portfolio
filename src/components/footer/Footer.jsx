import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>
        SALIMI
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#qualification'>Qualification</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#quotes'>Quotes</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/mysalimi' aria-label='Facebook'>
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/salimi.my/' aria-label='Instagram'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com/mysalimi' aria-label='Twitter'>
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>
          Made with React &copy; {new Date().getFullYear()} SALIMI. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
