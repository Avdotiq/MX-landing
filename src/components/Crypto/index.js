import React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import fetchData from '../../api/crypto';
import { Colors } from '../../utils/theme';
import { Breakpoint, Container } from '../../utils/grid';
import ZERO from '../../assets/images/backgrounds/zero-mobile-bigger-tinted.png';
import VECTOR_TB from '../../assets/images/backgrounds/vector_tb.png';
import VECTOR_DES from '../../assets/images/backgrounds/vector_des.png';
import ARR_UP from '../../assets/images/icons/arr_up.svg';
import ARR_DOWN from '../../assets/images/icons/arr_down.svg';
import BTC from '../../assets/images/icons/btc.svg';
import BTH from '../../assets/images/icons/bth.svg';
import ETH from '../../assets/images/icons/eth.svg';
import LTC from '../../assets/images/icons/ltc.svg';
import XRP from '../../assets/images/icons/xrp.svg';

const Crypto = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then(data => {
      setCoins(data);
      setLoading(false);
    });
  }, []);

  return (
    <StyledCrypto>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <StyledList>
            {coins.map(coin => (
              <StyledCard key={coin.id}>
                <StyledHeading>
                  <StyledSymbol>{coin.symbol}</StyledSymbol>
                  <StyledName>{coin.name}</StyledName>
                </StyledHeading>

                <StyledLine></StyledLine>
                <StyledPrice>${coin.price_usd}</StyledPrice>
                <StyledChange
                  isPositive={coin.percent_change_24h >= 0 ? true : undefined}
                >
                  {coin.percent_change_24h}%
                </StyledChange>
              </StyledCard>
            ))}
          </StyledList>
        )}
      </Container>
    </StyledCrypto>
  );
};

export default Crypto;

const StyledCrypto = styled.div`
  padding: 16px 0 45px;

  ${Breakpoint.md} {
    padding: 25px 0 45px;
  }

  ${Breakpoint.xl} {
    padding: 32px 0 65px;
  }
`;

const StyledList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;

  &::before {
    position: absolute;
    top: -85px;
    right: -75px;
    content: '';
    width: 152px;
    height: 161px;
    background-image: url(${ZERO});
    background-size: cover;
    z-index: 0;

    ${Breakpoint.md} {
      position: absolute;
      left: 0;
      top: 41px;
      content: url(${VECTOR_TB});
      width: auto;
      height: auto;
      background: none;
    }

    ${Breakpoint.xl} {
      content: url(${VECTOR_DES});
    }
  }
`;

const StyledCard = styled.li`
  position: relative;
  flex: 1;
  min-width: 210px;
  max-width: 236px;
  padding: 16px 13px;
  color: ${Colors.primary};
  border-radius: 14.309px;
  border: 0.954px solid rgba(167, 167, 167, 0.2);
  background: rgba(140, 140, 140, 0.1);
  z-index: 1;

  &:first-child div::before {
    content: url(${BTC});
  }

  &:nth-of-type(2) div:before {
    content: url(${ETH});
  }

  &:nth-of-type(3) div::before {
    content: url(${XRP});
  }

  &:nth-of-type(4) div::before {
    content: url(${LTC});
  }

  &:nth-of-type(5) div::before {
    content: url(${BTH});
  }
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledSymbol = styled.span`
  font-size: 12px;
  font-weight: 500;

  ${Breakpoint.lg} {
    font-size: 14px;
  }
`;

const StyledName = styled.span`
  padding: 2px 6px;
  font-size: 8px;
  font-weight: 500;
  color: ${Colors.primary_dark};
  border-radius: 4px;
  background: #fff8d6;
  text-transform: uppercase;
`;

const StyledLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  opacity: 0.15;
  background: #fff;
  margin: 15px 0 13px;
`;

const StyledPrice = styled.p`
  font-size: 19px;
  font-weight: 700;
`;
const StyledChange = styled.p`
  padding-top: 9px;
  font-size: 14px;

  &::before {
    margin-right: 3px;
    ${props =>
      props.isPositive
        ? css`
            content: url(${ARR_UP});
          `
        : css`
            content: url(${ARR_DOWN});
          `}
  }
`;
