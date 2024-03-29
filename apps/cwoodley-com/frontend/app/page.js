'use client';

import React from 'react';
import Carousel from 'components/carousel';
import { SwiperSlide } from 'swiper/react';
import {
  Image,
  AspectRatioContainer
} from '@cw/design-system';
import classNames from 'classnames';

function RootPage() {
  return (
      <div className='layout_row layout_row--md'>
        <div
          className={classNames(
            'layout_column',
            'layout_column--md-7',
            'layout_column--xl-7',
            'layout_column--md-order-2',
            'mb-2',
            'mb-4--md'
          )}
        >
          <Carousel>
            <SwiperSlide>
              <AspectRatioContainer
                size="xlg"
                ratio="3/2"
              >
                <Image
                  src="projects/losant-com-workflow-1280.png"
                  alt="Losant"
                  width="1280"
                  height="836"
                />
              </AspectRatioContainer>
            </SwiperSlide>

            <SwiperSlide>
              <AspectRatioContainer
                size="xlg"
                ratio="3/2"
              >
                <Image
                  src="../projects/genetesis-com.png"
                  alt="Genetesis"
                  width="1761"
                  height="1307"
                />
              </AspectRatioContainer>
            </SwiperSlide>

            <SwiperSlide>
              <AspectRatioContainer
                size="xlg"
                ratio="3/2"
              >
                <Image
                  src="projects/mybpstation-com.jpg"
                  alt="My BP Station"
                  width="1263"
                  height="929"
                />
              </AspectRatioContainer>
            </SwiperSlide>

            <SwiperSlide>
              <AspectRatioContainer
                size="xlg"
                ratio="3/2"
              >
                <Image
                  src="projects/tealeaveshealth-com.jpg"
                  alt="Tea Leaves Health"
                  width="1263"
                  height="929"
                />
              </AspectRatioContainer>
            </SwiperSlide>
          </Carousel>
        </div>

        <div
          className={classNames(
            'layout_column',
            'layout_column--md-5',
            'layout_column--xl-5'
          )}
        >
          <h1>Services</h1>

          <ul className="pl-5 mb-4">
            <li>Single Page Web Applications (Vue.js, React, Angular)</li>
            <li>Responsive Mobile First Front-End Development</li>
            <li>Wireframes / HTML Mockups</li>
            <li>Information Architecture</li>
            <li>User Interface Design</li>
          </ul>
        </div>
      </div>
    );
}

export default RootPage;
