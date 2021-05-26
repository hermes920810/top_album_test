import React from "react";

import * as Styled from "./input.styled";

interface OwnProps {
  value: string;
  onChange: (newValue: string) => void;
  onlyDigits?: boolean;
  maxLength?: number;
  placeholder?: string;
}

const Input: React.FC<OwnProps> = ({
  value,
  onlyDigits = false,
  maxLength = 30,
  onChange,
  placeholder,
}) => (
  <Styled.Input
    value={value}
    $onlyDigits={onlyDigits}
    maxLength={maxLength}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);

export default Input;
