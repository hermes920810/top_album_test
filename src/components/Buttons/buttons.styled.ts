import styled, { css } from "styled-components";
import {
  primaryColor,
  primaryColorDarker,
  primaryColorLighter,
  textOnPrimaryColor,
  secondaryColor,
  secondaryColorDarker,
  secondaryColorLighter,
  textOnSecondaryColor,
} from "styles/colors";

interface ButtonCoreProps {
  $primary: boolean;
  $transparent?: boolean;
  disabled: boolean;
}

export const ButtonCore = styled.button<ButtonCoreProps>`
  outline: none;
  cursor: pointer;
  border: 0 none;
  transition: background ease 0.3s;
  background-color: ${({ $primary }) =>
    $primary ? primaryColor : secondaryColor};
  color: ${({ $primary }) =>
    $primary ? textOnPrimaryColor : textOnSecondaryColor};

  ${({ $transparent }) =>
    $transparent &&
    css`
      background-color: transparent;
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
    `}

  &:hover {
    background-color: ${({ $primary }) =>
      $primary ? primaryColorDarker : secondaryColorDarker};
  }
  &:active {
    background-color: ${({ $primary }) =>
      $primary ? primaryColorLighter : secondaryColorLighter};
  }
`;
