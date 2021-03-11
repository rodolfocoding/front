import styled from 'styled-components';

import { darken } from 'polished';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 12px;
  margin-top: 36px;
  border-radius: 15px;
  border: none;
  color: #273352;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${darken(0.3, '#FFF')};
  }
`;
