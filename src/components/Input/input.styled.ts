import styled, { css } from "styled-components";
import {
  secondaryColor,
  secondaryColorDarker,
  secondaryColorLighter,
  textOnSecondaryColor,
} from "styles/colors";

interface InputProps {
  $onlyDigits?: boolean;
  maxLength: number;
}

export const Input = styled.input<InputProps>`
  border: 0;
  font-size: 12px;
  background-color: ${secondaryColor};
  color: ${textOnSecondaryColor};
  border-radius: 6px;
  padding: 8px 12px;
  outline: none;
  box-shadow: inset 1px 2px 8px rgb(0, 0, 0, 0.05);
  transition: background ease 0.3s;
  width: ${({ maxLength }) => maxLength * 10}px;
  ${({ $onlyDigits }) =>
    $onlyDigits &&
    css`
      text-align: right;
    `}

  &::placeholder {
    color: #bdbdbd;
  }

  &:hover {
    box-shadow: inset 2px 3px 8px rgb(0, 0, 0, 0.1);
    background-color: ${secondaryColorLighter};
  }
  &:active {
    background-color: ${secondaryColorDarker};
  }
`;
