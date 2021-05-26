import styled from "styled-components";
import { primaryColor } from "styles/colors";

export const Wrapper = styled.div`
  margin-top: 20px;
  padding: 16px;
  display: flex;
`;

export const ItemSection = styled.div`
  display: flex;
  color: ${primaryColor};
  font-size: 15px;
  font-weight: 600;
  text-decoration: underline;
`;

export const Icon = styled.div`
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${primaryColor};
`;