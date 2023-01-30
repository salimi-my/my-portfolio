import React from 'react';
import './about.css';
import MeJpg1000 from '../../assets/salimi-bw-background-1000.jpg';
import MeWebp1000 from '../../assets/salimi-bw-background-1000.webp';
import MeJpg440 from '../../assets/salimi-bw-background-440.jpg';
import MeWebp440 from '../../assets/salimi-bw-background-440.webp';
import MeJpg250 from '../../assets/salimi-bw-background-250.jpg';
import MeWebp250 from '../../assets/salimi-bw-background-250.webp';
import { FaAward } from 'react-icons/fa';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h1 className='small-title'>Get To Know</h1>
      <h2 className='medium-title'>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <picture>
              <source
                media='(max-width: 600px)'
                srcSet={MeWebp250}
                type='image/webp'
                width='250'
                height='250'
              />
              <source
                media='(max-width: 1024px)'
                srcSet={MeWebp440}
                type='image/webp'
                width='440'
                height='440'
              />
              <source
                media='(min-width: 1025px)'
                srcSet={MeWebp1000}
                type='image/webp'
                width='1000'
                height='1000'
              />
              <source
                media='(max-width: 600px)'
                srcSet={MeJpg250}
                type='image/jpeg'
                width='250'
                height='250'
              />
              <source
                media='(max-width: 1024px)'
                srcSet={MeJpg440}
                type='image/jpeg'
                width='440'
                height='440'
              />
              <source
                media='(min-width: 1025px)'
                srcSet={MeJpg1000}
                type='image/jpeg'
                width='1000'
                height='1000'
              />
              <img
                src={MeJpg1000}
                type='image/jpg'
                alt='about'
                width='1000'
                height='1000'
              />
            </picture>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h3>Experience</h3>
              <small>4+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h3>Projects</h3>
              <small>15+ Completed</small>
            </article>

            <article className='about__card'>
              <TfiHeadphoneAlt className='about__icon' />
              <h3>Worlwide</h3>
              <small>Remotely Available</small>
            </article>
          </div>

          <p>
            I am an enthusiastic and passionate web developer based in Malaysia
            with nearly half a decade of experience dedicated to deliver
            top-notch solutions and facilitate project success.
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
