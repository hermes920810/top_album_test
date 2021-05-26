import React from "react";

import * as Styled from "./iconButton.styled";

interface OwnProps {
  primary?: boolean;
  disabled?: boolean;
  transparent?: boolean;
  onClick: () => void;
}

const AmountInput: React.FC<React.PropsWithChildren<OwnProps>> = ({
  primary = false,
  disabled = false,
  transparent = false,
  onClick,
  children,
}) => (
  <Styled.IconButton
    $primary={primary}
    disabled={disabled}
    $transparent={transparent}
    onClick={onClick}
  >
    {children}
  </Styled.IconButton>
);

export default React.memo(AmountInput);
