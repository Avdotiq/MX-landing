import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../../../utils/theme';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 29, 39, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid ${Colors.primary};
  border-top: 5px solid ${Colors.primary_middle};
  animation: ${rotate} 1s linear infinite;
`;

const Loading = () => (
  <LoadingOverlay>
    <Spinner />
  </LoadingOverlay>
);

export default Loading;
