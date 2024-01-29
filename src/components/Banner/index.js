import React from 'react';
import styled from 'styled-components';
import { Breakpoint, Container } from '../../utils/grid';
import { Colors } from '../../utils/theme';
import DES_BG from '../../assets/images/backgrounds/general-0-swaps-desktop.png';
import TAB_BG from '../../assets/images/backgrounds/general-0-swaps-tablet.png';
import MOB_BG from '../../assets/images/backgrounds/general-0-swaps-mobile.png';
import PURP_DES from '../../assets/images/backgrounds/purp_des.png';
import GREEN_DES from '../../assets/images/backgrounds/green_des.png';
import PURP_TB from '../../assets/images/backgrounds/purp_tb.png';
import GREEN_TB from '../../assets/images/backgrounds/green_tb.png';
import PURP_MOB from '../../assets/images/backgrounds/purp_mob.png';
import GREEN_MOB from '../../assets/images/backgrounds/green_mob.png';

const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <StyledTitle>trade with</StyledTitle>
        <StyledHeading>
          <b>Zero Swaps</b> on Al l XM Ultra Low Accounts for more than 25
          instruments!
        </StyledHeading>
        <StyledDescription>
          Enjoy spreads as low as 0.6 pips and leverage up to 1000:1 on
          instruments li ke EURUSD, USDJPY, EURJPY, GBPUSD, and Gold.
        </StyledDescription>
        <StyledButton>open account</StyledButton>
        <StyledDemo>
          New to trading? Try a{' '}
          <a href='/#' rel='noreferrer'>
            Demo account.
          </a>
        </StyledDemo>
        <StyledTerms>
          Terms and Conditions apply<span>*</span>. To read the full T&Cs,{' '}
          <a href='/#' rel='noreferrer'>
            click here.
          </a>
        </StyledTerms>
      </Container>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.div`
  position: relative;
  padding: 83px 0;
  color: ${Colors.primary};
  text-align: center;
  background-image: url(${MOB_BG});
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;

  &::before {
    content: url(${PURP_MOB});
    position: absolute;
    top: 53px;
    left: 0;
  }

  &::after {
    content: url(${GREEN_MOB});
    position: absolute;
    right: 0;
    bottom: -170px;
  }

  ${Breakpoint.md} {
    padding: 100px 0;
    background-image: url(${TAB_BG});

    &::before {
      content: url(${PURP_TB});
      top: 0;
    }

    &::after {
      content: url(${GREEN_TB});
      bottom: -460px;
    }
  }

  ${Breakpoint.xl} {
    padding: 121px 0 163px;
    background-image: url(${DES_BG});

    &::before {
      content: url(${PURP_DES});
    }

    &::after {
      content: url(${GREEN_DES});
    }
  }
`;

const StyledTitle = styled.p`
  font-size: 16px;
  color: ${Colors.primary_middle};
  text-transform: uppercase;
`;

const StyledHeading = styled.h1`
  max-width: 621px;
  margin: auto;
  padding: 20px 0 30px;
  font-size: 28px;
  font-weight: 400;

  ${Breakpoint.md} {
    padding: 25px 0;
    font-size: 35px;
  }

  ${Breakpoint.lg} {
    padding: 25px 0 30px;
  }
`;

const StyledDescription = styled.p`
  max-width: 463px;
  margin: auto;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

const StyledButton = styled.button`
  width: 100%;
  max-width: 345px;
  margin: 30px 0;
  padding: 6px 10px 7px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${Colors.primary};
  text-transform: uppercase;
  background: ${Colors.btn_color};
`;

const StyledDemo = styled.p`
  padding-bottom: 15px;
  font-size: 14px;

  a {
    display: inline;
    color: ${Colors.primary};
    text-decoration: underline;

    &:hover {
      color: ${Colors.warn};
    }
  }
`;

const StyledTerms = styled.p`
  font-size: 12px;

  span {
    color: ${Colors.warn};
  }

  a {
    display: inline;
    color: ${Colors.warn};

    &:hover {
      color: ${Colors.primary};
    }
  }
`;
