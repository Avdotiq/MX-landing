import React, { useState } from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../../utils/grid';
import { Colors } from '../../../utils/theme';
import { ErrorMessage } from '@hookform/error-message';

const Step2 = ({ register, errors }) => {
  const [password, setPassword] = useState(null);

  const errorsPassword = [
    { message: '8 - 15 characters', pattern: /^(.{8,15})$/ },
    { message: '1 or more numbers', pattern: /^(?=.*\d)/ },
    { message: '1 or more lowercase letters', pattern: /^(?=.*[a-z])/ },
    { message: '1 or more uppercase letters', pattern: /^(?=.*[A-Z])/ },
    {
      message: '1 or more special characters (#[]()@$&*!?|,.^/\\+_\\-)',
      pattern: /^(?=.*[#\\[\]()@$&*!?|,.^/\\+_\\-])/
    }
  ];

  const patternValid = pattern => {
    return pattern.test(password);
  };

  return (
    <StyledStep>
      <StyledGroup>
        <label>
          Email:
          <input
            type='email'
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
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <StyledErrors>
          {errorsPassword.map(({ message, pattern }, index) => (
            <li
              key={index}
              className={
                password !== null
                  ? patternValid(pattern)
                    ? 'valid'
                    : 'invalid'
                  : ''
              }
            >
              {message}
            </li>
          ))}
        </StyledErrors>
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
    bottom: -15px;
    font-size: 11px;
    color: ${Colors.warn};
  }
`;

const StyledErrors = styled.ul`
  margin-top: 7px;
  font-size: 12px;
  color: #959595;

  li {
    padding-top: 3px;

    &.valid {
      color: ${Colors.success};
    }

    &.invalid {
      color: ${Colors.warn};
    }
  }
`;
