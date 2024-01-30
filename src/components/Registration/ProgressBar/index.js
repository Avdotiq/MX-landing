import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../../utils/theme';
import { Breakpoint } from '../../../utils/grid';

const ProgressBar = data => {
  const { isValid, activeStep } = data;
  return (
    <StyledBar>
      <StyledFullBar activeStep={activeStep}>
        <StyledStep>
          <StyledHeading activeStep={activeStep}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='16' cy='16' r='13' fill='#29A642' />
              <circle cx='16' cy='16' r='15.5' stroke='#32AA43' />
              <path
                d='M17.4824 11.0264V21H15.5137V13.2959L13.1484 14.0479V12.4961L17.2705 11.0264H17.4824Z'
                fill='white'
              />
            </svg>
            <p>Step 1</p>
          </StyledHeading>
          <StyledProgress isValid={isValid} activeStep={activeStep} id='step1'>
            <StyledFulling></StyledFulling>
          </StyledProgress>
        </StyledStep>
        <StyledStep>
          <StyledHeading activeStep={activeStep}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='16' cy='16' r='13' fill='#CCCCCC' />
              <circle cx='16' cy='16' r='15.5' stroke='#CCCCCC' />
              <path
                d='M19.4922 19.4619V21H12.6836V19.6875L15.9033 16.2354C16.2269 15.8753 16.4821 15.5586 16.6689 15.2852C16.8558 15.0072 16.9902 14.7588 17.0723 14.54C17.1589 14.3167 17.2021 14.1048 17.2021 13.9043C17.2021 13.6035 17.152 13.346 17.0518 13.1318C16.9515 12.9131 16.8034 12.7445 16.6074 12.626C16.416 12.5075 16.179 12.4482 15.8965 12.4482C15.5957 12.4482 15.3359 12.5212 15.1172 12.667C14.903 12.8128 14.7389 13.0156 14.625 13.2754C14.5156 13.5352 14.4609 13.8291 14.4609 14.1572H12.4854C12.4854 13.5648 12.6266 13.0225 12.9092 12.5303C13.1917 12.0335 13.5905 11.6393 14.1055 11.3477C14.6204 11.0514 15.2311 10.9033 15.9375 10.9033C16.6348 10.9033 17.2227 11.0173 17.7012 11.2451C18.1842 11.4684 18.5488 11.792 18.7949 12.2158C19.0456 12.6351 19.1709 13.1364 19.1709 13.7197C19.1709 14.0479 19.1185 14.3691 19.0137 14.6836C18.9089 14.9935 18.7585 15.3034 18.5625 15.6133C18.3711 15.9186 18.1387 16.2285 17.8652 16.543C17.5918 16.8574 17.2887 17.1833 16.9561 17.5205L15.2266 19.4619H19.4922Z'
                fill='#201D27'
              />
            </svg>
            <p>Step 2</p>
          </StyledHeading>
          <StyledProgress isValid={isValid} activeStep={activeStep} id='step2'>
            <StyledFulling></StyledFulling>
          </StyledProgress>
        </StyledStep>
      </StyledFullBar>
    </StyledBar>
  );
};

export default ProgressBar;

const StyledBar = styled.div`
  overflow: hidden;
`;

const StyledFullBar = styled.div`
  position: relative;
  display: flex;
  gap: 0;
  width: 200%;
  transition: transform 0.5s ease;

  ${props =>
    props.activeStep === 2
      ? css`
          transform: translateX(-50%);
        `
      : css``}

  ${Breakpoint.md} {
    position: initial;
    gap: 8px;
    width: 100%;
    transition: none;
    transform: none;
  }

  ${Breakpoint.lg} {
    gap: 19px;
  }
`;

const StyledStep = styled.div`
  width: 100%;
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;
  color: #ccc;

  ${props =>
    props.activeStep === 2
      ? css`
          svg circle:nth-child(1) {
            fill: ${Colors.line};
          }

          svg circle:nth-child(2) {
            stroke: ${Colors.line};
          }

          svg path {
            fill: ${Colors.primary};
          }
        `
      : css``}

  ${Breakpoint.md} {
    gap: 9px;
  }
`;

const StyledProgress = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: ${Colors.primary_middle};
  border-radius: 4px;

  ${props => {
    const { isValid, activeStep } = props;

    switch (true) {
      case isValid && activeStep === 1:
        return css`
          &#step1 div {
            width: 50%;
          }
        `;

      case !isValid && activeStep === 2:
        return css`
          &#step1 div {
            width: 100%;
          }
        `;

      case isValid && activeStep === 2:
        return css`
          &#step1 div {
            width: 100%;
          }

          &#step2 div {
            width: 50%;
          }
        `;

      default:
        return css``;
    }
  }}
`;

const StyledFulling = styled.div`
  position: absolute;
  width: 0;
  height: 8px;
  border-radius: 4px;
  background: ${Colors.line};
  transition: width 0.5s ease;
`;
