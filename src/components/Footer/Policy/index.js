import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../utils/theme';
import { Breakpoint } from '../../../utils/grid';
import LOGO from '../../../assets/images/logos/trading-point.svg';

const Policy = () => {
  return (
    <StyledPolicy>
      <StyledList>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </li>
        <li>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </li>
      </StyledList>
      <img src={LOGO} alt="Trading point" />
    </StyledPolicy>
  );
};

export default Policy;

const StyledPolicy = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${Breakpoint.md} {
    justify-content: space-between;
  }
`;

const StyledList = styled.ul`
  display: flex;
  gap: 14px;

  li {
    position: relative;
  }

  li:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -7px;
    width: 1px;
    height: 9px;
    background-color: ${Colors.secondary};
    transform: translateY(-50%);
  }

  a {
    font-size: 12px;
    color: ${Colors.secondary};
    white-space: nowrap;

    &:hover {
      color: ${Colors.warn};
      text-decoration: none;
    }
  }
`;
