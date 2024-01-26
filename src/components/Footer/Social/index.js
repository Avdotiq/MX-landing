import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../utils/theme';
import { Breakpoint } from '../../../utils/grid';
import LG_1 from '../../../assets/images/logos/mega-quotes.svg';
import LG_2 from '../../../assets/images/logos/verisign.svg';
import LG_3 from '../../../assets/images/logos/unicef.svg';
import LG_4 from '../../../assets/images/logos/investors-in-people.svg';
import LG_faceb from '../../../assets/images/logos/facebook.svg';
import LG_twit from '../../../assets/images/logos/twitter.svg';
import LG_yt from '../../../assets/images/logos/you-tube.svg';
import LG_inst from '../../../assets/images/logos/instagram.svg';
import LG_link from '../../../assets/images/logos/linked-in.svg';

const Social = () => {
  return (
    <StyledSocial>
      <StyledPartners>
        <img src={LG_1} alt='Mega Quotes' />
        <img src={LG_2} alt='Verisign' />
        <img src={LG_3} alt='Unicef' />
        <img src={LG_4} alt='Investors in people' />
      </StyledPartners>
      <StyledMedia>
        <p>Follow us on</p>
        <a
          href='https://www.facebook.com/xmpolish'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          <img src={LG_faceb} alt='Facebook' />
        </a>
        <a
          href='https://twitter.com/xmeurope'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          <img src={LG_twit} alt='Twitter' />
        </a>
        <a
          href='https://www.youtube.com/channel/UCsleUTXW_GyYsblIMdtPyXA'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          <img src={LG_yt} alt='YouTube' />
        </a>
        <a
          href='https://www.instagram.com/xmeurope'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          <img src={LG_inst} alt='Instagram' />
        </a>
        <a
          href='https://www.linkedin.com/company/xm-global/'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          <img src={LG_link} alt='LinkedIn' />
        </a>
      </StyledMedia>
    </StyledSocial>
  );
};

export default Social;

const StyledSocial = styled.div`
  display: none;

  ${Breakpoint.lg} {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 34px;
    margin-bottom: 11px;
    border-bottom: 1px solid ${Colors.text};
  }
`;

const StyledPartners = styled.div`
  display: flex;
  gap: 58px;
`;

const StyledMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  font-weight: 500;

  p {
    padding-right: 7px;
  }

  a {
    padding: 7px;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
