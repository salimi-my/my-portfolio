import React, { useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import './portfolio.css';
import IMG1 from '../../assets/house-min.png';
import IMG2 from '../../assets/facebook-clone-min.png';
import IMG3 from '../../assets/my-portfolio-min.png';
import IMG4 from '../../assets/instagram-clone-min.png';
import IMG5 from '../../assets/youtube-clone-min.png';
import IMG6 from '../../assets/waktu-solat-min.png';
import IMG7 from '../../assets/travel-map-min.png';
import IMG8 from '../../assets/chatters-min.png';
import IMG9 from '../../assets/phonebook-app-min.png';
import IMG10 from '../../assets/protected-share-min.png';
import IMG11 from '../../assets/social-login-min.png';
import IMG1webp from '../../assets/house-min.webp';
import IMG2webp from '../../assets/facebook-clone-min.webp';
import IMG3webp from '../../assets/my-portfolio-min.webp';
import IMG4webp from '../../assets/instagram-clone-min.webp';
import IMG5webp from '../../assets/youtube-clone-min.webp';
import IMG6webp from '../../assets/waktu-solat-min.webp';
import IMG7webp from '../../assets/travel-map-min.webp';
import IMG8webp from '../../assets/chatters-min.webp';
import IMG9webp from '../../assets/phonebook-app-min.webp';
import IMG10webp from '../../assets/protected-share-min.webp';
import IMG11webp from '../../assets/social-login-min.webp';

const data = [
  {
    id: 1,
    image: IMG1,
    imageWebp: IMG1webp,
    title: 'House - Property Listing App',
    github: 'https://github.com/salimi-my/house',
    demo: 'https://house.salimi.my',
    tags: ['Laravel', 'VueJS', 'InertiaJS']
  },
  {
    id: 2,
    image: IMG2,
    imageWebp: IMG2webp,
    title: 'Fakebook - A Facebook Clone App',
    github: 'https://github.com/salimi-my/facebook-clone',
    demo: 'https://fakebook.salimi.my',
    tags: ['NextJS', 'Tailwind', 'Firebase']
  },
  {
    id: 3,
    image: IMG3,
    imageWebp: IMG3webp,
    title: 'My Portfolio - A Personal Portfolio Site',
    github: 'https://github.com/salimi-my/my-portfolio',
    demo: 'https://www.salimi.my',
    tags: ['ReactJS', 'EmailJS']
  },
  {
    id: 4,
    image: IMG4,
    imageWebp: IMG4webp,
    title: 'Instakilo - An Instagram Clone App',
    github: 'https://github.com/salimi-my/instagram-clone',
    demo: 'https://instakilo.salimi.my',
    tags: ['NextJS', 'Tailwind', 'Firebase']
  },
  {
    id: 5,
    image: IMG5,
    imageWebp: IMG5webp,
    title: 'YourTube - A YouTube Clone App',
    github: 'https://github.com/salimi-my/youtube-clone',
    demo: 'https://yourtube.salimi.my',
    tags: ['ReactJS', 'Material UI', 'RapidAPI']
  },
  {
    id: 6,
    image: IMG6,
    imageWebp: IMG6webp,
    title: "Waktu Solat - Prayer's Schedule",
    github: 'https://github.com/salimi-my/waktu-solat',
    demo: 'https://solat.salimi.my',
    tags: ['VueJS', 'Tailwind', 'DayJS']
  },
  {
    id: 7,
    image: IMG7,
    imageWebp: IMG7webp,
    title: 'Travel Map - A Simple Map App',
    github: 'https://github.com/salimi-my/travel-map',
    demo: 'https://travel.salimi.my',
    tags: ['MERN Stack', 'Mapbox', 'JWT']
  },
  {
    id: 8,
    image: IMG8,
    imageWebp: IMG8webp,
    title: 'Chatters - A Simple Chat App',
    github: 'https://github.com/salimi-my/chatters',
    demo: 'https://chatters.salimi.my',
    tags: ['NextJS', 'TypeScript', 'Upstash']
  },
  {
    id: 9,
    image: IMG9,
    imageWebp: IMG9webp,
    title: 'Phonebook - A Simple Contacts App',
    github: 'https://github.com/salimi-my/phonebook-app',
    demo: 'https://phonebook.salimi.my',
    tags: ['CodeIgniter', 'Bootstrap', 'MySQL']
  },
  {
    id: 10,
    image: IMG10,
    imageWebp: IMG10webp,
    title: 'Protected Share - File Sharing App',
    github: 'https://github.com/salimi-my/protected-share',
    demo: 'https://share.salimi.my',
    tags: ['CodeIgniter', 'Bootstrap', 'MySQL']
  },
  {
    id: 11,
    image: IMG11,
    imageWebp: IMG11webp,
    title: 'Social Login - Codeigniter Social Auth',
    github: 'https://github.com/salimi-my/social-login',
    demo: 'https://social-login.salimi.my',
    tags: ['CodeIgniter', 'Tailwind', 'MySQL']
  }
];

const Portfolio = () => {
  const [count, setCount] = useState(6);
  return (
    <section id='portfolio'>
      <h1 className='small-title'>My Recent Work</h1>
      <h2 className='medium-title'>Portfolio</h2>

      <div className='container portfolio__container'>
        {data
          .slice(0, count)
          .map(({ id, image, imageWebp, title, github, demo, tags }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <picture>
                    <source srcSet={imageWebp} type='image/webp' />
                    <img
                      src={image}
                      type='image/jpg'
                      width='600'
                      height='420'
                      alt={title}
                    />
                  </picture>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__tag'>
                  {tags.map((tag, index) => {
                    return (
                      <span key={index} className='portfolio__tag-pill'>
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div className='portfolio__item-cta'>
                  <a
                    href={github}
                    className='btn btn-variant'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className='btn btn-white'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
      <div className='btn-row'>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (count === 6) {
              setCount(data.length);
            } else {
              setCount(6);
            }
          }}
          type='button'
          className='btn btn-dark-variant'
        >
          See{' '}
          {count === 6 ? (
            <>
              More <BsArrowDownCircle className='moreless' />
            </>
          ) : (
            <>
              Less <BsArrowUpCircle className='moreless' />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
