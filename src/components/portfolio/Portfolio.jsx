import { useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import './portfolio.css';

import IMG1 from '../../assets/social-login-min.png';
import IMG2 from '../../assets/protected-share-min.png';
import IMG3 from '../../assets/phonebook-app-min.png';
import IMG4 from '../../assets/my-portfolio-min.png';
import IMG5 from '../../assets/chatters-min.png';
import IMG6 from '../../assets/travel-map-min.png';
import IMG7 from '../../assets/waktu-solat-min.png';
import IMG8 from '../../assets/youtube-clone-min.png';
import IMG9 from '../../assets/instagram-clone-min.png';
import IMG10 from '../../assets/facebook-clone-min.png';
import IMG11 from '../../assets/house-min.png';
import IMG12 from '../../assets/ai-image-min.png';
import IMG13 from '../../assets/netflix-clone-min.png';
import IMG14 from '../../assets/ai-summarizer-min.png';
import IMG15 from '../../assets/hangman-min.png';
import IMG16 from '../../assets/url-shortener-min.png';
import IMG17 from '../../assets/book-store-min.png';
import IMG18 from '../../assets/scribe-min.png';

import IMG1webp from '../../assets/social-login-min.webp';
import IMG2webp from '../../assets/protected-share-min.webp';
import IMG3webp from '../../assets/phonebook-app-min.webp';
import IMG4webp from '../../assets/my-portfolio-min.webp';
import IMG5webp from '../../assets/chatters-min.webp';
import IMG6webp from '../../assets/travel-map-min.webp';
import IMG7webp from '../../assets/waktu-solat-min.webp';
import IMG8webp from '../../assets/youtube-clone-min.webp';
import IMG9webp from '../../assets/instagram-clone-min.webp';
import IMG10webp from '../../assets/facebook-clone-min.webp';
import IMG11webp from '../../assets/house-min.webp';
import IMG12webp from '../../assets/ai-image-min.webp';
import IMG13webp from '../../assets/netflix-clone-min.webp';
import IMG14webp from '../../assets/ai-summarizer-min.webp';
import IMG15webp from '../../assets/hangman-min.webp';
import IMG16webp from '../../assets/url-shortener-min.webp';
import IMG17webp from '../../assets/book-store-min.webp';
import IMG18webp from '../../assets/scribe-min.webp';

const data = [
  {
    id: 1,
    image: IMG1,
    imageWebp: IMG1webp,
    title: 'Social Login - Codeigniter Social Auth',
    github: 'https://github.com/salimi-my/social-login',
    demo: 'https://social-login.salimi.my',
    tags: ['CodeIgniter', 'Tailwind', 'MySQL'],
    desc: 'This is a social media auth app created using Codeigniter with Facebook, Google, or Twitter.'
  },
  {
    id: 2,
    image: IMG2,
    imageWebp: IMG2webp,
    title: 'Protected Share - File Sharing App',
    github: 'https://github.com/salimi-my/protected-share',
    demo: 'https://share.salimi.my',
    tags: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    desc: 'This is a simple file sharing app with shared link are password protected to download.'
  },
  {
    id: 3,
    image: IMG3,
    imageWebp: IMG3webp,
    title: 'Phonebook - A Simple Contacts App',
    github: 'https://github.com/salimi-my/phonebook-app',
    demo: 'https://phonebook.salimi.my',
    tags: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    desc: 'This is a simple CRUD application created using Codeigniter for contacts book listing.'
  },
  {
    id: 4,
    image: IMG4,
    imageWebp: IMG4webp,
    title: 'My Portfolio - A Personal Portfolio Site',
    github: 'https://github.com/salimi-my/my-portfolio',
    demo: 'https://my-portfolio.salimi.my',
    tags: ['ReactJS', 'EmailJS'],
    desc: 'This is my personal portfolio website, built with React, showing list of my personal projects.'
  },
  {
    id: 5,
    image: IMG5,
    imageWebp: IMG5webp,
    title: 'Chatters - A Simple Chat App',
    github: 'https://github.com/salimi-my/chatters',
    demo: 'https://chatters.salimi.my',
    tags: ['NextJS', 'TypeScript', 'Upstash'],
    desc: 'This a simple chat app created using Next.js 13. User can login using Google and send chats.'
  },
  {
    id: 6,
    image: IMG6,
    imageWebp: IMG6webp,
    title: 'Travel Map - A Simple Map App',
    github: 'https://github.com/salimi-my/travel-map',
    demo: 'https://travel.salimi.my',
    tags: ['MERN Stack', 'Mapbox', 'JWT'],
    desc: 'This a simple travel map app created with MERN. User can register, login and add pin on map.'
  },
  {
    id: 7,
    image: IMG7,
    imageWebp: IMG7webp,
    title: "Waktu Solat - Prayer's Schedule",
    github: 'https://github.com/salimi-my/waktu-solat',
    demo: 'https://solat.salimi.my',
    tags: ['VueJS', 'Tailwind', 'DayJS'],
    desc: 'This is a simple web app created using Vue.js that aims to display prayer times in Malaysia.'
  },
  {
    id: 8,
    image: IMG8,
    imageWebp: IMG8webp,
    title: 'YourTube - A YouTube Clone App',
    github: 'https://github.com/salimi-my/youtube-clone',
    demo: 'https://yourtube.salimi.my',
    tags: ['ReactJS', 'Material UI', 'RapidAPI'],
    desc: 'This is YouTube clone created using React.js and Material UI. Videos populated using RapidAPI.'
  },
  {
    id: 9,
    image: IMG9,
    imageWebp: IMG9webp,
    title: 'Instakilo - An Instagram Clone App',
    github: 'https://github.com/salimi-my/instagram-clone',
    demo: 'https://instakilo.salimi.my',
    tags: ['NextJS', 'Tailwind', 'Firebase'],
    desc: 'This is an Instagram clone created using Nextjs, Firebase, Recoil, Tailwind and NextAuthjs.'
  },
  {
    id: 10,
    image: IMG10,
    imageWebp: IMG10webp,
    title: 'Fakebook - A Facebook Clone App',
    github: 'https://github.com/salimi-my/facebook-clone',
    demo: 'https://fakebook.salimi.my',
    tags: ['NextJS', 'Tailwind', 'Firebase'],
    desc: 'This is a Facebook clone created using Nextjs, Firebase, Recoil, Tailwind and NextAuthjs.'
  },
  {
    id: 11,
    image: IMG11,
    imageWebp: IMG11webp,
    title: 'House - Property Listing App',
    github: 'https://github.com/salimi-my/house',
    demo: 'https://house.salimi.my',
    tags: ['Laravel', 'VueJS', 'InertiaJS'],
    desc: 'This is an online property listing and marketplace app created using Laravel, Vue and Inertia.'
  },
  {
    id: 12,
    image: IMG12,
    imageWebp: IMG12webp,
    title: 'AI Image Generator - Image App',
    github: 'https://github.com/salimi-my/ai-image-generator',
    demo: 'https://ai-image.salimi.my',
    tags: ['MERN Stack', 'Tailwind', 'Open AI'],
    desc: 'This is an AI app that can create realistic images and art from a description in natural language.'
  },
  {
    id: 13,
    image: IMG13,
    imageWebp: IMG13webp,
    title: 'Netfuix - A Netflix Clone App',
    github: 'https://github.com/salimi-my/netflix-clone',
    demo: 'https://netfuix.salimi.my',
    tags: ['NextJS', 'Tailwind', 'Prisma'],
    desc: 'This is a Netflix clone created using Nextjs, Prisma, MongoDB, Tailwind, NextAuthjs and Zustand.'
  },
  {
    id: 14,
    image: IMG14,
    imageWebp: IMG14webp,
    title: 'AI Summarizer - An Article Simplifier',
    github: 'https://github.com/salimi-my/ai-summarizer',
    demo: 'https://summarizer.salimi.my',
    tags: ['ReactJS', 'Tailwind', 'Rapid API'],
    desc: 'This is an AI app to simplify lengthy articles into concise summaries by inputting article URL.'
  },
  {
    id: 15,
    image: IMG15,
    imageWebp: IMG15webp,
    title: 'Hangman - Guess The Word',
    github: 'https://github.com/salimi-my/hangman',
    demo: 'https://hangman.salimi.my',
    tags: ['ReactJS', 'Tailwind'],
    desc: 'This is a classic word puzzle game Hangman user play by guessing letters one at a time to solve it.'
  },
  {
    id: 16,
    image: IMG16,
    imageWebp: IMG16webp,
    title: 'URL Shortener - Short Link & Analytics',
    github: 'https://github.com/salimi-my/url-shortener',
    demo: 'https://url.salimi.my',
    tags: ['NextJS', 'shadcn/ui', 'Clerk'],
    desc: 'This is URL shortener app. Users can create custom short link & view analytics of the links.'
  },
  {
    id: 17,
    image: IMG17,
    imageWebp: IMG17webp,
    title: 'Book Store - A Book E-Commerce',
    github: 'https://github.com/salimi-my/book-store',
    demo: 'https://book-store.salimi.my/',
    tags: ['Laravel', 'ReactJS', 'toyyibPay'],
    desc: 'This is a book store e-commerce app with server side carts & toyyibPay payment gateway.'
  },
  {
    id: 18,
    image: IMG18,
    imageWebp: IMG18webp,
    title: 'Scribe - Chat with PDF',
    github: 'https://github.com/salimi-my/scribe',
    demo: 'https://scribe.salimi.my/',
    tags: ['NextJS', 'OpenAI', 'Kinde'],
    desc: 'Scribe enable you to converse with any PDF instantly. Just upload your file and start chatting.'
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
          .slice(0)
          .reverse()
          .slice(0, count)
          .map(({ id, image, imageWebp, title, github, demo, tags, desc }) => {
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
                <p className='portfolio__desc'>{desc}</p>
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
