import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  width: 50px;
  margin: 16px auto;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #444;
  animation: is-rotating 1s infinite;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
