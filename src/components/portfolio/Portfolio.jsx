import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/facebook-clone-min.png';
import IMG2 from '../../assets/my-portfolio-min.png';
import IMG3 from '../../assets/protected-share-min.png';
import IMG1webp from '../../assets/facebook-clone-min.webp';
import IMG2webp from '../../assets/my-portfolio-min.webp';
import IMG3webp from '../../assets/protected-share-min.webp';

const data = [
  {
    id: 1,
    image: IMG1,
    imageWebp: IMG1webp,
    title: 'Fakebook - A Facebook Clone App',
    github: 'https://github.com/salimi-my/facebook-clone',
    demo: 'https://fakebook.salimi.my',
    tags: ['NextJS', 'Tailwind', 'Firebase']
  },
  {
    id: 2,
    image: IMG2,
    imageWebp: IMG2webp,
    title: 'My Portfolio - A Personal Portfolio Site',
    github: 'https://github.com/salimi-my/my-portfolio',
    demo: 'https://www.salimi.my',
    tags: ['React', 'EmailJS']
  },
  {
    id: 3,
    image: IMG3,
    imageWebp: IMG3webp,
    title: 'Protected Share - File Sharing',
    github: 'https://github.com/salimi-my/protected-share',
    demo: 'https://share.salimi.my',
    tags: ['Codeigniter', 'Bootstrap', 'MySQL']
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, imageWebp, title, github, demo, tags }) => {
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
                <a href={github} className='btn btn-variant'>
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
    </section>
  );
};

export default Portfolio;
