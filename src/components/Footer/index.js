import React from 'react';
import styled from 'styled-components';
import Social from './Social';
import Policy from './Policy';
import { Breakpoint, Container } from '../../utils/grid';
import { Colors } from '../../utils/theme';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Social />
        <Policy />
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 62px 0;
  color: ${Colors.secondary};
  background-color: ${Colors.primary_dark};

  ${Breakpoint.lg} {
    padding: 52px 0;
  }

  ${Breakpoint.lg} {
    padding: 53px 0 64px;
  }
`;
