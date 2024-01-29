import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../../utils/grid';
import { Colors } from '../../../utils/theme';
import { ErrorMessage } from '@hookform/error-message';

const Step2 = ({ register, errors }) => {
  return (
    <StyledStep>
      <StyledGroup>
        <label>
          Email:
          <input
            type='password'
            {...register('email', {
              required: 'Field is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please Enter Valid Email'
              }
            })}
          />
        </label>
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => <p>{message}</p>}
        />
      </StyledGroup>
      <StyledGroup>
        <label>
          Password:
          <input
            {...register('password', {
              required: 'Field is required',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#\\[\]()@$&*!?|,.^\\/\\+_\\-]).{8,15}$/,
                message: 'Please Enter Valid Passwords'
              }
            })}
          />
        </label>
        <ErrorMessage
          errors={errors}
          name='password'
          render={({ message }) => <p>{message}</p>}
        />

        {/* <div>
          <p style={{ color: 'gray' }}>8 - 15 characters</p>
          <p style={{ color: 'gray' }}>1 or more numbers</p>
          <p style={{ color: 'gray' }}>1 or more lower case letters</p>
          <p style={{ color: 'gray' }}>1 or more upper case letters</p>
          <p style={{ color: 'gray' }}>
            1 or more special characters (#[]()@$&*!?|,.^/\+_-)
          </p>
        </div> */}
      </StyledGroup>
    </StyledStep>
  );
};

export default Step2;

const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${Breakpoint.md} {
    gap: 40px;
  }

  ${Breakpoint.lg} {
    flex-direction: row;
    gap: 19px;
  }
`;

const StyledGroup = styled.div`
  position: relative;
  width: 100%;

  input {
    margin-top: 10px;
    padding: 12px 8px;
    width: 100%;
    font-family: Roboto;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${Colors.primary};
  }

  p {
    position: absolute;
    bottom: -20px;
    font-size: 11px;
    color: ${Colors.warn};
  }
`;
