import React from 'react';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Breakpoint } from '../../../utils/grid';
import { Colors } from '../../../utils/theme';
import { ErrorMessage } from '@hookform/error-message';

const Step1 = ({ errors, register, control }) => {
  const validateDateOfBirth = value => {
    const currentDate = dayjs();

    if (!dayjs(value).isValid()) {
      return 'Invalid date format';
    }

    const age = currentDate.diff(value, 'years');

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
          <Controller
            label='Date'
            control={control}
            defaultValue={null}
            name='date'
            rules={{
              validate: {
                range: date => validateDateOfBirth(date)
              }
            }}
            render={({
              field: { ref, onBlur, name, onChange, ...field },
              fieldState
            }) => (
              <StyledDatePicker
                {...field}
                inputRef={ref}
                label=''
                value={field.value || null}
                onChange={onChange}
                slotProps={{
                  textField: {
                    required: true,
                    onBlur,
                    name,
                    error: !!fieldState?.error,
                    helperText: fieldState?.error?.message
                  }
                }}
              />
            )}
          />
        </label>
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
