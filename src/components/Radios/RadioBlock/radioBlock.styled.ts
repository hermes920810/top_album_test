import styled, { css } from "styled-components";
import {
  primaryColor,
  secondaryColor,
  secondaryColorDarker,
  secondaryColorLighter,
} from "styles/colors";

interface BlockProps {
  $selected: boolean;
}

export const Block = styled.div<BlockProps>`
  display: flex;
  flex-grow: 1;
  width: 100px;
  padding: 12px;
  align-items: center;
  cursor: pointer;
  background-color: ${({ $selected }) =>
    $selected ? secondaryColor : "#fdfdfd"};
  border: 1px solid ${secondaryColor};
  border-radius: 10px;
  transition: background ease 0.3s;

  &:hover {
    background-color: ${secondaryColorLighter};
  }
  &:active {
    background-color: ${secondaryColorDarker};
  }
`;

interface IndicatorProps {
  $selected: boolean;
}
export const Indicator = styled.div<IndicatorProps>`
  border: 1px solid #b8b8b8;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 8px;

  ${({ $selected }) =>
    $selected &&
    css`
      position: relative;

      &:before {
        position: absolute;
        display: block;
        content: "";
        border-radius: 50%;
        background: ${primaryColor};
        left: 2px;
        top: 2px;
        bottom: 2px;
        right: 2px;
      }
    `}
}
`;

export const Content = styled.div``;
