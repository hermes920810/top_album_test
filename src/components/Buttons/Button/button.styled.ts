import styled, { css } from "styled-components";

import { ButtonCore } from "../buttons.styled";

interface ButtonProps {
  $fullWidth?: boolean;
}

export const Button = styled(ButtonCore)<ButtonProps>`
  border: 0;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 5px;
  font-weight: 700;
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;
