import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/theme';
import FAST from '../../assets/images/icons/fast-execusion-icon.png';
import PRICING from '../../assets/images/icons/competitive-pricing-icon.png';
import TECH from '../../assets/images/icons/tech-icon.png';
import DOLLAR from '../../assets/images/icons/dollar-icon.png';
import { Breakpoint, Container } from '../../utils/grid';

const Strengths = data => {
  const { strengths } = data;
  return (
    <Container>
      <StyledStrengths>
        {strengths &&
          strengths.map(({ title, description }, index) => (
            <StyledCard key={index}>
              <StyledHeading>{title}</StyledHeading>
              <StyledText dangerouslySetInnerHTML={{ __html: description }} />
            </StyledCard>
          ))}
      </StyledStrengths>
    </Container>
  );
};

export default Strengths;

const StyledStrengths = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  max-width: 530px;
  margin: auto;
  color: ${Colors.primary};
  z-index: 1;

  ${Breakpoint.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1016px;
  }
`;

const StyledCard = styled.li`
  padding: 43px 60px 43px 30px;
  border-radius: 10px;
  background: #0b0819;
  backdrop-filter: blur(45px);

  ${Breakpoint.md} {
    padding: 40px 185px 40px 40px;
  }

  ${Breakpoint.lg} {
    padding: 60px 55px;
  }

  &:nth-child(1) {
    background-image: url(${FAST});
    background-position: calc(100% - 30px) 30px;
    background-repeat: no-repeat;
    background-size: 27px;

    ${Breakpoint.md} {
      background-size: 42px;
    }

    ${Breakpoint.lg} {
      grid-row: span 2;
      background-position: 20px calc(100% - 30px);
      background-size: 100px;
    }
  }

  &:nth-child(2) {
    background-image: url(${PRICING});
    background-position: calc(100% - 30px) 30px;
    background-repeat: no-repeat;
    background-size: 55px;

    ${Breakpoint.md} {
      background-size: 85px;
    }

    ${Breakpoint.lg} {
      grid-column: span 2;
      background-size: 90px;

      & p {
        max-width: 405px;
      }
    }
  }

  &:nth-child(3) {
    background-image: url(${TECH});
    background-position: calc(100% - 30px) 30px;
    background-repeat: no-repeat;
    background-size: 55px;

    ${Breakpoint.md} {
      background-size: 70px;
    }
  }

  &:nth-child(4) {
    background-image: url(${DOLLAR});
    background-position: calc(100% - 30px) 30px;
    background-repeat: no-repeat;
    background-size: 39px;

    ${Breakpoint.md} {
      background-size: 60px;
    }

    ${Breakpoint.lg} {
      background-size: 49px;
    }
  }

  h3 {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background: ${Colors.line};
    }
  }
`;

const StyledHeading = styled.h3`
  position: relative;
  max-width: 175px;
  padding-bottom: 25px;
  font-size: 20px;
  font-weight: 700;

  ${Breakpoint.md} {
    font-size: 25px;
  }
`;

const StyledText = styled.p`
  padding-top: 25px;
  font-size: 14px;
  line-height: 1.4;

  ${Breakpoint.xl} {
    font-size: 16px;
  }
`;
