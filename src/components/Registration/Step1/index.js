import React, { useState } from 'react';
import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Breakpoint } from '../../../utils/grid';
import { Colors } from '../../../utils/theme';
import { ErrorMessage } from '@hookform/error-message';

const Step1 = ({ errors, register }) => {
  const [date, setDate] = useState(null);

  const validateDateOfBirth = value => {
    const currentDate = dayjs();
    const birthDate = dayjs(value);

    if (!birthDate.isValid()) {
      return 'Invalid date format';
    }

    const age = currentDate.diff(birthDate, 'years');

    if (age < 18) {
      return 'Must be at least 18 years old';
    }

    if (age >= 60) {
      return 'Must be under 60 years old';
    }

    return true;
  };

  return (
    <StyledStep>
      <StyledGroup>
        <label>
          Name:
          <input
            {...register('name', {
              required: 'Field is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Please Enter Valid Name'
              }
            })}
            label='Name'
          />
        </label>
        <ErrorMessage
          errors={errors}
          name='name'
          render={({ message }) => <p>{message}</p>}
        />
      </StyledGroup>
      <StyledGroup>
        <label>
          Date of Birth:
          <StyledDateInput
            {...register('dob', {
              required: 'Field is required',
              validate: validateDateOfBirth
            })}
            value={date ? date : ''}
            label='Dade of birthday'
          />
          <StyledDatePicker onChange={value => console.log(value)} />
        </label>
        <ErrorMessage
          errors={errors}
          name='dob'
          render={({ message }) => <p>{message}</p>}
        />
      </StyledGroup>
    </StyledStep>
  );
};

export default Step1;

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

const StyledDateInput = styled.input`
  display: none;
`;

const StyledDatePicker = styled(DatePicker)`
  &.MuiFormControl-root {
    display: flex;
    margin-top: 10px;
    background: ${Colors.primary};

    input {
      margin-top: 0;
      padding: 12px 8px;
      width: 100%;
      font-family: Roboto;
      font-size: 14px;
    }
  }

  &.MuiInputBase-root {
    border-radius: none;
  }
`;
