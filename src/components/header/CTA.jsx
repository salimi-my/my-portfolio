import { BsFillChatFill } from 'react-icons/bs';

const Cta = () => {
  return (
    <div className='cta'>
      <a
        href='https://share.salimi.my/share/file/f1a0b3050e57a7dec2a94499bd4f8524'
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
