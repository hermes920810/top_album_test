import styled from "styled-components";
import {
  secondaryColor,
  secondaryColorDarker,
  secondaryColorLighter,
} from "styles/colors";

export const Block = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100px;
  padding: 12px;
  align-items: center;
  cursor: pointer;
  background: white;
  border: 1px dashed ${secondaryColor};
  border-radius: 10px;
  transition: background ease 0.3s;

  &:hover {
    background-color: ${secondaryColorLighter};
  }
  &:active {
    background-color: ${secondaryColorDarker};
  }
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  color: #ccc;
  margin-right: 8px;
`;

export const Content = styled.div`
  color: #808080;
`;
