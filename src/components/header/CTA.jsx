import { BsFillChatFill } from 'react-icons/bs';

const Cta = () => {
  return (
    <div className='cta'>
      <a
        href='https://share.salimi.my/share/file/7cbb3d49585ebfe510f3787c6e61a1cf'
        target='_blank'
        rel='noreferrer'
        className='btn cta-icon dl'
      >
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary cta-icon'>
        <BsFillChatFill /> Let&apos;s Talk
      </a>
    </div>
  );
};

export default Cta;
