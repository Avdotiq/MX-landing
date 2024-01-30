import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../../utils/grid';
import { Colors } from '../../../utils/theme';

const Success = () => {
  return (
    <StyledSuccess>
      <h3>Registration Successful</h3>
      <p>
        Thank you for registering for our event with XM. You will receive an
        email shortly with confirmation of your registration.
      </p>
    </StyledSuccess>
  );
};

export default Success;

const StyledSuccess = styled.div`
  padding: 30px;
  color: ${Colors.success};
  border: 1px solid #31b63b;
  background: #f3fef4;

  h3 {
    font-size: 24px;
    font-weight: 500;
  }

  p {
    padding-top: 44px;
    font-size: 14px;
  }

  ${Breakpoint.md} {
    padding: 60px;
  }
`;
