import styled from 'styled-components';

import { darken } from 'polished';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    #5e0af2 0%,
    #7a15f3 47%,
    #911df3 100%
  );
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  border-radius: 8px;
  width: 1020px;
  height: 600px;
  background: #273352;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 32px;
    }

    h1 {
      text-align: center;
      color: white;
      font-size: 32px;
      margin-bottom: 16px;
    }

    p {
      line-height: 19px;
      text-align: start;
      color: white;
      font-size: 16px;
      max-width: 300px;
    }
  }
`;

const FormContent = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  button {
    padding: 12px;
    margin-top: 36px;
    border-radius: 15px;
    border: none;
    color: #273352;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${darken(0.3, '#FFF')};
    }
  }

  span {
    margin-top: 4px;
    text-align: end;
    color: white;
    a {
      text-decoration: none;
      color: #911df3;
    }
  }
`;

export { Container, Content, FormContent };
