import React from "react";

export interface RadiosContextProps {
  selected: string;
  setSelected: (value: string) => void;
}

export const RadiosContext = React.createContext<RadiosContextProps>({
  selected: "0",
  setSelected: (_value) => {},
});
