import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: 16px 0;
  padding: 0 16px;
  border: 1px solid #444;

  li {
    margin: 8px;
  }

  h1 {
    font-size: 24px;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #444;
    padding: 8px 0;
  }
`;

export const Character = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 100px;
    border-radius: 50%;
  }

  span {
    margin-top: 8px;
  }
`;
