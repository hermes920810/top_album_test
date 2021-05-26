import { RadiosContext, RadiosContextProps } from "./RadiosContext";

import * as Styled from "./radios.styled";
import { RadioBlock } from "./RadioBlock";
import { AddNewItem } from "./AddNewItem";

type OwnProps = RadiosContextProps;

const Radios = ({
  selected,
  setSelected,
  children,
}: React.PropsWithChildren<OwnProps>) => (
  <RadiosContext.Provider value={{ selected, setSelected }}>
    <Styled.Wrapper>{children}</Styled.Wrapper>
  </RadiosContext.Provider>
);

Radios.RadioBlock = RadioBlock;
Radios.AddNewItem = AddNewItem;

export default Radios;
