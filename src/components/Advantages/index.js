import React from 'react';
import styled from 'styled-components';
import data from '../../utils/data/data.json';
import { Container } from '../../utils/grid';
import { Colors } from '../../utils/theme';

const Advantages = () => {
  const { advantages } = data;
  return (
    <StyledAdvantages>
      <Container>
        <StyledGrid>
          {advantages &&
            advantages.map(({ title, description, svg }, index) => (
              <div key={index}>
                {svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : null}
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            ))}
        </StyledGrid>
      </Container>
    </StyledAdvantages>
  );
};

export default Advantages;

const StyledAdvantages = styled.div`
  color: ${Colors.text};
`;

const StyledGrid = styled.div``;
