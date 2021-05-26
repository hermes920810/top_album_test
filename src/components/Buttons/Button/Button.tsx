import React from "react";

import * as Styled from "./button.styled";

/* This ain't perfect, but apparently just passing whole React.HTMLProps<HTMLButtonElement> to Styled.button won't work: https://github.com/styled-components/styled-components/issues/3182 */
type GenericButtonProps = Pick<
  React.HTMLProps<HTMLButtonElement>,
  "onClick" | "children" | "disabled"
>;

interface OwnProps extends GenericButtonProps {
  fullWidth?: boolean;
  primary?: boolean;
  transparent?: boolean;
}

const Button: React.FC<OwnProps> = ({
  fullWidth = false,
  primary = false,
  transparent = false,
  disabled = false,
  ...buttonProps
}) => (
  <Styled.Button
    $fullWidth={fullWidth}
    $primary={primary}
    $transparent={transparent}
    disabled={disabled}
    {...buttonProps}
  />
);

export default React.memo(Button);
