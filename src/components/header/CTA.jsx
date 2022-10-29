import React from 'react';
import { BsFillChatFill } from 'react-icons/bs';

const CTA = () => {
  return (
    <div className='cta'>
      <a
        href='https://share.salimi.my/share/file/7cbb3d49585ebfe510f3787c6e61a1cf'
        target='_blank'
        rel='noreferrer'
        className='btn cta-icon'
      >
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary cta-icon'>
        <BsFillChatFill /> Let's Talk
      </a>
    </div>
  );
};

export default CTA;
