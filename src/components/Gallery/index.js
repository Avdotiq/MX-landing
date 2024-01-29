import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from 'styled-components';
import { Breakpoint, Container, Mediasize } from '../../utils/grid';
import { Colors } from '../../utils/theme';
import IMG_1 from '../../assets/images/gallery/hof.jpeg';
import IMG_2 from '../../assets/images/gallery/mountains.jpeg';
import IMG_3 from '../../assets/images/gallery/office.jpeg';
import IMG_4 from '../../assets/images/gallery/of.jpeg';
import IMG_5 from '../../assets/images/gallery/of1.jpg';
import IMG_6 from '../../assets/images/gallery/of2.jpg';

const Gallery = () => {
  const sliderParams = {
    drag: 'free',
    arrows: true,
    arrowPath:
      'M31.0123 19.0782C31.2805 19.3454 31.4146 19.6526 31.4146 20C31.4146 20.3474 31.2805 20.6546 31.0123 20.9218L12.2645 39.5992C11.9963 39.8664 11.6879 40 11.3392 40C10.9905 40 10.6821 39.8664 10.4139 39.5992L8.40231 37.5952C8.1341 37.328 8 37.0207 8 36.6733C8 36.326 8.1341 36.0187 8.40231 35.7515L24.2132 20L8.40231 4.2485C8.1341 3.9813 8 3.67402 8 3.32665C8 2.97929 8.1341 2.67201 8.40231 2.40481L10.4139 0.400802C10.6821 0.1336 10.9905 0 11.3392 0C11.6879 0 11.9963 0.1336 12.2645 0.400802L31.0123 19.0782Z',
    pagination: false,
    perPage: 2,
    perMove: 1,
    gap: 25,
    mediaQuery: 'min',
    lazyLoad: 'sequential',
    height: '100px',
    width: '80%',
    heightRatio: '100%',
    cover: true,
    breakpoints: {
      [Mediasize.md]: { perPage: 4, gap: 30, height: '130px' },
      [Mediasize.lg]: { perPage: 5, gap: 36, height: '164px', width: '90%' }
    }
  };
  return (
    <StyledGallegy>
      <Container>
        <StyledHeading>Event Gallery</StyledHeading>
        <StyledComicsSlider hasTrack={false} options={sliderParams}>
          <SplideTrack>
            <SplideSlide>
              <img data-splide-lazy={IMG_1} alt='Office event' />
            </SplideSlide>
            <SplideSlide>
              <img data-splide-lazy={IMG_2} alt='Office event' />
            </SplideSlide>
            <SplideSlide>
              <img data-splide-lazy={IMG_3} alt='Office event' />
            </SplideSlide>
            <SplideSlide>
              <img data-splide-lazy={IMG_4} alt='Office event' />
            </SplideSlide>
            <SplideSlide>
              <img data-splide-lazy={IMG_5} alt='Office event' />
            </SplideSlide>
            <SplideSlide>
              <img data-splide-lazy={IMG_6} alt='Office event' />
            </SplideSlide>
          </SplideTrack>
        </StyledComicsSlider>
      </Container>
    </StyledGallegy>
  );
};

export default Gallery;

const StyledGallegy = styled.div`
  padding: 55px 0;
  background: ${Colors.secondary_light};

  ${Breakpoint.md} {
    padding: 75px 0;
  }
`;

const StyledHeading = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #252525;
  text-align: center;

  ${Breakpoint.md} {
    font-size: 30px;
  }
`;

const StyledComicsSlider = styled(Splide)`
  margin: 40px auto 0;

  ${Breakpoint.lg} {
    margin: 50px auto 0;
  }

  .splide__arrow {
    background: none;

    &--next {
      right: -35px;

      ${Breakpoint.md} {
        right: -35px;
      }

      ${Breakpoint.lg} {
        right: -60px;
      }
    }

    &--prev {
      left: -35px;

      ${Breakpoint.md} {
        left: -35px;
      }

      ${Breakpoint.lg} {
        left: -60px;
      }
    }
  }
`;
