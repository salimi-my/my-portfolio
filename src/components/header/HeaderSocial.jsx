import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.facebook.com/mysalimi'
        aria-label='Facebook'
        target='_blank'
        rel='noreferrer'
      >
        <ImFacebook2 />
      </a>
      <a
        href='https://www.linkedin.com/in/mohamad-salimi/'
        aria-label='Linkedin'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/salimi-my'
        aria-label='Github'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
