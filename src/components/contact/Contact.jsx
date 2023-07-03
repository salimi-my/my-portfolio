import { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsDiscord } from 'react-icons/bs';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageSubmitting, setMessageSubmitting] = useState(false);
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setMessageSubmitting(false);
            setMessageSubmitted(true);
          }
        },
        (error) => {
          setMessageSubmitting(false);
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h1 className='small-title'>Get in Touch</h1>
      <h2 className='medium-title'>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h3>Email</h3>
            <h4>contact@salimi.my</h4>
            <a href='mailto:contact@salimi.my' target='_blank' rel='noreferrer'>
              Email me
            </a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h3>Messenger</h3>
            <h4>Mohamad Salimi</h4>
            <a href='https://m.me/mysalimi' target='_blank' rel='noreferrer'>
              Say hello
            </a>
          </article>

          <article className='contact__option'>
            <BsDiscord className='contact__option-icon' />
            <h3>Discord</h3>
            <h4>salimi.my</h4>
            <a
              href='https://discordapp.com/users/216541962147332096'
              target='_blank'
              rel='noreferrer'
            >
              Let&apos;s chat
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          {!messageSubmitting && !messageSubmitted && (
            <button type='submit' className='btn btn-primary submitted-show'>
              Send Message
            </button>
          )}
          {messageSubmitting && (
            <button
              type='button'
              className='btn btn-primary submitting-btn-show'
              disabled
            >
              <div className='lds-ring'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              Submitting...
            </button>
          )}
          {!messageSubmitting && messageSubmitted && (
            <button
              type='button'
              className='btn btn-success submitted-show'
              disabled
            >
              Message Submitted
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
