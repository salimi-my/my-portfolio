import React from 'react';
import './about.css';
import ME from '../../assets/salimi-bw-background-min.jpg';
import { FaAward } from 'react-icons/fa';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>

            <article className='about__card'>
              <TfiHeadphoneAlt className='about__icon' />
              <h5>Worlwide</h5>
              <small>Available Remotely</small>
            </article>
          </div>

          <p>
            I am an enthusiastic and passionate web developer based in Malaysia
            with more than three years of experience creating solutions and
            facilitate project completion.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
