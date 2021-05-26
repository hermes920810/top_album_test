import React from "react";

import { Input } from "../Input";
import { IconButton } from "../Buttons";

import * as Styled from "./amountInput.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface OwnProps {
  value: number;
  maxLength?: number;
  onChange: (value: number) => void;
}

iconLibrary.add(faPlus, faMinus);

const AmountInput: React.FC<React.PropsWithChildren<OwnProps>> = ({
  value,
  onChange,
  maxLength = 5,
  children,
}) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  const inputOnChange = (value: string) => {
    const numberValue = parseInt(value, 10);
    Number.isNaN(numberValue) ? onChange(0) : onChange(numberValue);
  };

  const valueForInput = value !== 0 ? value.toString() : "";

  return (
    <Styled.Wrapper>
      <Input
        value={valueForInput}
        placeholder="0"
        onChange={inputOnChange}
        maxLength={maxLength}
        onlyDigits
      />
      <IconButton primary onClick={increment}>
        <FontAwesomeIcon icon="plus" />
      </IconButton>
      <IconButton primary onClick={decrement} disabled={value <= 0}>
        <FontAwesomeIcon icon="minus" />
      </IconButton>
      <Styled.Description>{children}</Styled.Description>
    </Styled.Wrapper>
  );
};

export default React.memo(AmountInput);
