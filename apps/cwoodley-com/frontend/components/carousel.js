'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { styled } from 'styled-components';
import { useViewportMatch } from '@cw/design-system';
import { colors } from 'utils/app-theme';

const StyledSwiper = styled(Swiper)`
  .swiper-pagination-bullet-active {
    background: ${colors.blueYonder[700]};
    border: solid 1px ${colors.blueYonder[400]};
  }

  ${
    ({ $isDesktopViewport }) => {
      return $isDesktopViewport ? `
        width: 100%;
        height: 100%;

        &::before,
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          z-index: 10;
          background-size: cover;
          background-repeat: no-repeat;
        }

        &::before {
          background-image: linear-gradient(180deg, #151D2A 0%, transparent 100%);
          height: 20px;
          top: 0;

          @media (min-width: 1200px) {
            height: 38px;
          }

          @media (min-width: 1440px) {
            height: 45px;
          }
        }
        
        &::after {
          background-image: linear-gradient(0deg, #151D2A 0%, transparent 100%);
          height: 28px;
          bottom: 0;

          @media (min-width: 1200px) {
            height: 52px;
          }

          @media (min-width: 1440px) {
            height: 66px;
          }
        }

        @media (min-width: 1008px) {
          max-height: 489px;
        }
        
        @media (min-width: 1200px) {
          max-height: 559px;
        }
        
        @media (min-width: 1440px) {
          max-height: 685px;
        }

        .swiper-slide {
          height: 75%;
          margin-bottom: 20px;

          @media (min-width: 1200px) {
            height: 78%;
          }
          
          @media (min-width: 1400px) {
            height: 78%;
          }
        }
      ` : `
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
          width: 85%;
          margin-left: 10px;
          margin-right: 10px;
        }
      `;
    }
  }
`;

function Carousel({ children, className }) {
  const isDesktopViewport =  useViewportMatch({
    value: '1008px'
  });
  const direction = isDesktopViewport ? 'vertical' : 'horizontal';

  return (
    <StyledSwiper
      className={className}
      direction={direction}
      slidesPerView={'auto'}
      centeredSlides={true}
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
      $isDesktopViewport={isDesktopViewport}
    >
      {children}
    </StyledSwiper>
  );
}

export default Carousel;
