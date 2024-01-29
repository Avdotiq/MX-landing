import React from 'react';
import styled from 'styled-components';
import { Breakpoint, Container } from '../../utils/grid';
import { Colors } from '../../utils/theme';

const EventDetails = data => {
  const { title, description, schudele } = data.eventDetails[0];
  return (
    <StyledEventDetails>
      <Container>
        <StyledHeading>{title}</StyledHeading>
        <StyledDescription>{description}</StyledDescription>
        <StyledDetails>
          {schudele &&
            schudele.map(({ iconSVG, notes }, index) => (
              <StyledCard key={index}>
                <div dangerouslySetInnerHTML={{ __html: iconSVG }} />
                <p>{notes}</p>
              </StyledCard>
            ))}
        </StyledDetails>
      </Container>
    </StyledEventDetails>
  );
};

export default EventDetails;

const StyledEventDetails = styled.div`
  position: relative;
  padding: 70px 0;
  color: ${Colors.primary};
  text-align: center;
  z-index: 1;

  ${Breakpoint.md} {
    padding: 80px 0;
  }
`;

const StyledHeading = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 700;

  ${Breakpoint.md} {
    font-size: 34px;
  }
`;

const StyledDescription = styled.p`
  padding: 35px 20px 20px;
  font-size: 16px;

  ${Breakpoint.md} {
    padding: 35px 0;
  }

  ${Breakpoint.lg} {
    padding: 40px 0 51px;
  }
`;

const StyledDetails = styled.ul`
  margin: auto;
  max-width: 280px;
  font-weight: 500;
  text-transform: uppercase;

  ${Breakpoint.md} {
    display: grid;
    grid-template-columns: 33% 26% 40%;
    max-width: 656px;
    border-top: 1px solid ${Colors.primary};
    border-bottom: 1px solid ${Colors.primary};
  }
`;

const StyledCard = styled.li`
  padding: 20px 0;

  &:nth-child(2) {
    border-top: 1px solid ${Colors.primary};
    border-bottom: 1px solid ${Colors.primary};

    ${Breakpoint.md} {
      border-left: 1px solid ${Colors.primary};
      border-right: 1px solid ${Colors.primary};
    }
  }

  ${Breakpoint.md} {
    padding: 30px 0 20px;
  }

  ${Breakpoint.lg} {
    padding: 25px 0 20px;
  }
`;
