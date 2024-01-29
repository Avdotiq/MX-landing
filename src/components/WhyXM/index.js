import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/theme';
import { Breakpoint, Container } from '../../utils/grid';
import NUM_MOB from '../../assets/images/backgrounds/gold-number_mob.png';
import NUM_TB from '../../assets/images/backgrounds/gold-number_tb.png';
import NUM_DES from '../../assets/images/backgrounds/gold-number_des.png';

const WhyXM = () => {
  return (
    <Container>
      <StyledWhyXM>
        <StyledHeading>
          Why <b>Trade</b> with XM?
        </StyledHeading>
        <StyledLine></StyledLine>
        <StyleDescription>
          We have been providing traders around the world with the same{' '}
          <b>premium experience</b> for over a decade. As an{' '}
          <b>industry-leader</b>, we know what the modern trader needs to be{' '}
          <b>successful</b> in the markets.
        </StyleDescription>
      </StyledWhyXM>
    </Container>
  );
};

export default WhyXM;

const StyledWhyXM = styled.section`
  position: relative;
  max-width: 641px;
  margin: auto;
  padding: 25px 0 60px;
  color: ${Colors.primary};
  text-align: center;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -45px;
    left: -220px;
    width: 426px;
    height: 483px;
    background: url(${NUM_MOB}) no-repeat;
    background-size: contain;
    z-index: -1;
  }

  ${Breakpoint.md} {
    &::before {
      top: -80px;
      left: -310px;
      width: 548px;
      height: 618px;
      background: url(${NUM_TB}) no-repeat;
    }
  }

  ${Breakpoint.xl} {
    padding: 20px 0 35px;

    &::before {
      top: -100px;
      left: -700px;
      width: 856px;
      height: 966px;
      background: url(${NUM_DES}) no-repeat;
    }
  }
`;

const StyledHeading = styled.h2`
  font-size: 32px;
  font-weight: 300;

  ${Breakpoint.md} {
    font-size: 35px;
  }
`;

const StyledLine = styled.span`
  display: block;
  width: 70px;
  height: 2px;
  margin: 25px auto;
  background: ${Colors.line};
`;

const StyleDescription = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;
