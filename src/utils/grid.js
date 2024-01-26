import styled from 'styled-components';

export const Mediasize = {
  xs: '320',
  md: '768',
  lg: '992',
  xl: '1200',
};

export const Breakpoint = {
  xs: `@media (min-width: ${Mediasize.xs}px)`,
  md: `@media (min-width: ${Mediasize.md}px)`,
  lg: `@media (min-width: ${Mediasize.lg}px)`,
  xl: `@media (min-width: ${Mediasize.xl}px)`,
};

export const Container = styled.div`
  max-width: 1170px;
  box-sizing: border-box;
  padding: 0 15px;
  margin: auto;
  ${Breakpoint.md} {
    padding: 0 30px;
  }
`;
