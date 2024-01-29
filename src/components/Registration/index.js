import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Step1 from './Step1';
import Step2 from './Step2';
import ProgressBar from './ProgressBar';
import { Breakpoint, Container } from '../../utils/grid';
import styled from 'styled-components';
import { Colors } from '../../utils/theme';
import Success from './Success';

const Registration = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm({ criteriaMode: 'all' });
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextStep = () => {
    if (activeStep === 2) {
      setIsSubmitted(true);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Container>
      <StyledRegistration>
        <ProgressBar isValid={isValid} activeStep={activeStep} />
        <StyledForm onSubmit={handleSubmit(handleNextStep)}>
          {isSubmitted ? (
            <Success />
          ) : (
            <>
              {activeStep === 1 && (
                <Step1 register={register} errors={errors} />
              )}
              {activeStep === 2 && (
                <Step2 register={register} errors={errors} />
              )}
            </>
          )}
          <StyledButton type='submit' disabled={!isValid}>
            {activeStep > 1 ? 'Register now' : 'Continue'}
          </StyledButton>
        </StyledForm>
      </StyledRegistration>
    </Container>
  );
};

export default Registration;

const StyledRegistration = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 15px;
  margin: auto;
  max-width: 455px;

  ${Breakpoint.lg} {
    max-width: 825px;
  }
`;

const StyledForm = styled.form`
  margin: 25px 0;

  ${Breakpoint.md} {
    margin: 40px 0 25px;
  }

  ${Breakpoint.lg} {
    margin: 45px 0 33px;
  }
`;

const StyledButton = styled.button`
  display: block;
  width: 100%;
  max-width: 345px;
  margin: 30px auto;
  padding: 6px 10px 7px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${Colors.primary};
  text-transform: uppercase;
  background: ${Colors.btn_color};

  ${Breakpoint.md} {
    margin: 60px auto;
    max-width: none;
  }

  &:disabled {
    background: #ccc;
  }
`;
