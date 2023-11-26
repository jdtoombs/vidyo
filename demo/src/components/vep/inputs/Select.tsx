import React from "react";
import * as styled from "./styled";

export interface ISelectProps extends Omit<React.HTMLProps<HTMLSelectElement>, "onChange"> {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<ISelectProps> = ({ options, ...rest }) => {
  return (
    <styled.Select {...rest}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </styled.Select>
  );
};
