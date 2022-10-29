import React from 'react';
import './quotes.css';
import AVATAR1 from '../../assets/martin-fowler.jpg';
import AVATAR2 from '../../assets/kent-beck.jpg';
import AVATAR3 from '../../assets/chris-pine.jpg';
import AVATAR4 from '../../assets/jason-c-mcdonald.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Martin Fowler',
    review:
      '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”'
  },
  {
    avatar: AVATAR2,
    name: 'Kent Beck',
    review:
      '“Optimism is an occupational hazard of programming: feedback is the treatment.”'
  },
  {
    avatar: AVATAR3,
    name: 'Chris Pine',
    review:
      "“Programming isn't about what you know, it's about what you can figure out.”"
  },
  {
    avatar: AVATAR4,
    name: 'Jason C. McDonald',
    review:
      "“Don't write better error messages, write code that doesn't need them.”"
  }
];

const Quotes = () => {
  return (
    <section id='quotes'>
      <h5>Wise words</h5>
      <h2>Quotes</h2>

      <Swiper
        className='container quotes__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='quote'>
              <div className='client__avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Quotes;
