import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
    text-align: center;
    padding-bottom: 8px;
    width: 100%;
    border-bottom: 1px solid #444;
  }

  label {
    font-size: 18px;
    font-weight: 700;
  }

  input {
    height: 40px;
    width: 60px;
    text-align: center;
    margin: 8px 0;
  }

  button {
    border-radius: 8px;
    border: none;
    padding: 16px 32px;
    margin-top: 16px;
    color: #fff;
    background-color: #080;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media only screen and (max-width: 768px) {
    h1 {
      border: none;
    }
  }
`;
