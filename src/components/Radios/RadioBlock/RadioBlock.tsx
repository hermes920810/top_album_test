import { useCallback, useContext } from "react";
import { RadiosContext } from "../RadiosContext";

import * as Styled from "./radioBlock.styled";

interface OwnProps {
  index: string;
}

const RadioBlock: React.FC<React.PropsWithChildren<OwnProps>> = ({
  index,
  children,
}) => {
  const { selected, setSelected } = useContext(RadiosContext);
  const onClick = useCallback(() => setSelected(index), [setSelected, index]);
  return (
    <Styled.Block $selected={selected === index} onClick={onClick}>
      <Styled.Indicator $selected={selected === index} />
      <Styled.Content>{children}</Styled.Content>
    </Styled.Block>
  );
};

export default RadioBlock;
