import styled from 'styled-components';

import backgroundImage from '../../assets/bg.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  height: auto;
  width: 100%;
  padding: 16px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url(${backgroundImage}) center no-repeat;
    filter: grayscale(100);
    opacity: 0.08;
    z-index: -1;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    &::after {
      background: none;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding: 16px;
  margin-bottom: 60px;
  border-right: 1px solid #444;

  @media only screen and (max-width: 768px) {
    border-bottom: 1px solid #444;
    border-right: none;
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  width: 50%;
  padding: 16px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  border: 1px solid #444;
  padding: 16px;

  h1 {
    font-size: 24px;
  }
`;
