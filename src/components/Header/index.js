import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Breakpoint, Container } from '../../utils/grid';
import { Colors } from '../../utils/theme';
import LOGO from '../../assets/images/logos/logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={LOGO} alt='XM logo' />
        <nav>
          <StyledList>
            <Link to='/'>XM Homepage</Link>
            <Link to='/support'>Support</Link>
          </StyledList>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 33px 0;
  background: ${Colors.primary_dark};

  div {
    display: flex;
    justify-content: center;

    ${Breakpoint.lg} {
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const StyledList = styled.ul`
  display: none;

  ${Breakpoint.lg} {
    display: flex;
  }

  a {
    padding: 10px 20px;
    font-size: 15px;
    color: ${Colors.primary};
  }
`;
