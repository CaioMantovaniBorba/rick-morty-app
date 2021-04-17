import styled from 'styled-components';

import toggleImage from '../../assets/toggle.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 32px;
  background: transparent;
  color: #fff;

  .react-switch-handle {
    background: url(${toggleImage}) !important;
  }
`;
