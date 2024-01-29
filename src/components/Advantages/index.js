import React from 'react';
import styled from 'styled-components';
import data from '../../utils/data.json';
import { Breakpoint, Container } from '../../utils/grid';
import { Colors } from '../../utils/theme';
import GRID_BG from '../../assets/images/backgrounds/grid-bg.svg';

const Advantages = () => {
  const { advantages } = data;
  return (
    <StyledAdvantages>
      <Container>
        <StyledGrid>
          {advantages &&
            advantages.map(({ title, description, svg }, index) => (
              <StyledItem key={index}>
                {svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : null}
                <StyledHeading dangerouslySetInnerHTML={{ __html: title }} />
                <StyledDescription
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </StyledItem>
            ))}
        </StyledGrid>
      </Container>
    </StyledAdvantages>
  );
};

export default Advantages;

const StyledAdvantages = styled.div`
  padding: 10px 0 70px;
  color: ${Colors.text};

  ${Breakpoint.xl} {
    padding: 57px 0 70px;
  }
`;

const StyledGrid = styled.div`
  & > div:first-child {
    ${Breakpoint.md} {
      grid-column: span 2;

      p {
        font-size: 16px;
      }
    }

    ${Breakpoint.xl} {
      grid-column: unset;
      grid-row: span 2;
      padding: 35px 25px;
      margin-top: 0;

      p {
        max-width: 209px;
      }
    }

    h3 {
      position: relative;
      padding: 23px 0 22px;
      font-size: 35px;
      font-weight: 900;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 4px;
        background: ${Colors.warn};

        ${Breakpoint.xl} {
          left: 0;
          transform: none;
        }
      }

      ${Breakpoint.md} {
        font-size: 42px;
      }

      ${Breakpoint.xl} {
        max-width: 280px;
        padding: 40px 0 55px;
        font-size: 80px;
      }
    }
  }

  ${Breakpoint.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-image: url(${GRID_BG});
    background-repeat: no-repeat;
    background-position-y: 72%;
    background-position-x: center;
  }

  ${Breakpoint.xl} {
    grid-template-columns: repeat(3, 1fr);
    background-position-y: 53%;
    background-position-x: 79%;
  }
`;

const StyledItem = styled.div`
  margin-top: 50px;
  text-align: center;

  ${Breakpoint.md} {
    &:not(:first-child) {
      margin-top: 0;
      text-align: start;
    }

    &:nth-child(even) {
      padding: 33px 66px 20px 55px;
    }

    &:nth-child(odd):not(:first-child) {
      padding: 33px 45px 20px 81px;
    }
  }

  ${Breakpoint.xl} {
    text-align: start;
  }
`;

const StyledHeading = styled.h3`
  padding: 19px 0 16px;
  font-size: 20px;
  font-weight: 700;

  span {
    color: ${Colors.warn};
  }
`;

const StyledDescription = styled.p`
  font-size: 14px;
  line-height: 1.35;
`;
