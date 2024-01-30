import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Step1 from './Step1';
import Step2 from './Step2';
import ProgressBar from './ProgressBar';
import { Breakpoint, Container } from '../../utils/grid';
import styled from 'styled-components';
import { Colors } from '../../utils/theme';
import Success from './Success';
import Loading from './Loading';

const Registration = () => {
  const {
    register,
    control,
    formState: { errors, isValid },
    handleSubmit
  } = useForm({ mode: 'onChange' });
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNextStep = () => {
    if (activeStep === 2) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
      }, 2000);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Container>
      <StyledRegistration>
        {isSubmitted ? (
          <Success />
        ) : (
          <>
            {loading && <Loading />}
            <ProgressBar isValid={isValid} activeStep={activeStep} />
            <form onSubmit={handleSubmit(handleNextStep)}>
              {activeStep === 1 && (
                <Step1 register={register} errors={errors} control={control} />
              )}
              {activeStep === 2 && (
                <Step2 register={register} errors={errors} />
              )}
              <StyledButton type='submit' disabled={!isValid}>
                {activeStep > 1 ? 'Register now' : 'Continue'}
              </StyledButton>
            </form>
          </>
        )}
      </StyledRegistration>
    </Container>
  );
};

export default Registration;

const StyledRegistration = styled.div`
  position: relative;
  z-index: 1;
  margin: 25px auto;
  max-width: 455px;

  ${Breakpoint.md} {
    margin: 40px auto 25px;
  }

  ${Breakpoint.lg} {
    margin: 45px auto 33px;
    max-width: 825px;
  }

  form {
    margin-top: 30px;
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
