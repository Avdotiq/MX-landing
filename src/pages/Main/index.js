import React from 'react';
import styled from 'styled-components';
import data from '../../utils/data.json';
import Banner from '../../components/Banner';
import Advantages from '../../components/Advantages';
import Crypto from '../../components/Crypto';
import { Colors } from '../../utils/theme';
import WhyXM from '../../components/WhyXM';
import Strengths from '../../components/Strengths';
import Gallery from '../../components/Gallery';
import EventDetails from '../../components/EventDetails';
import Registracion from '../../components/Registration';

function Main() {
  const { advantages, strengths, eventDetails } = data;
  return (
    <>
      <StyledHiddenWrapper>
        <Banner />
        <Crypto />
        <WhyXM />
        <Strengths strengths={strengths} />
        <EventDetails eventDetails={eventDetails} />
        <Registracion />
      </StyledHiddenWrapper>
      <Gallery />
      <Advantages advantages={advantages} />
    </>
  );
}

export default Main;

const StyledHiddenWrapper = styled.div`
  background: ${Colors.primary_bg};
  overflow: hidden;
`;
