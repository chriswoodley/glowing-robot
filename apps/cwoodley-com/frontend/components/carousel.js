'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { styled } from 'styled-components';

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  right: 0;

  .swiper-wrapper {
    height: 100%;
  }

  &::before,
  &::after {
    content: "";
    width: 7%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 10;
    background-size: cover;
    background-repeat: no-repeat;
  }


  &::before {
    background-image: linear-gradient(90deg, #151D2A 5%, transparent 66.666%);
    background-position: top left;
    left: 0;
  }
  
  &::after {
    background-image: linear-gradient(-90deg, #151D2A 5%, transparent 66.666%);
    background-position: top right;
    right: 0;
  }

  .swiper-slide {
    width: 75%;
  }
`;

function Carousel({ children }) {
  return (
    <StyledSwiper
      className="mb-4"
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={20}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[ Pagination, Keyboard, Autoplay ]}
    >
      {children}
    </StyledSwiper>
  );
}

export default Carousel;
