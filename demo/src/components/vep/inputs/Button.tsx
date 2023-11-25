import React from "react";
import * as styled from "./styled";

export interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: React.ReactNode;
  variant?: "danger" | "action";
}

export const Button: React.FC<IButtonProps> = ({ variant, ...rest }) => {
  return <styled.Button $variant={variant} {...rest}></styled.Button>;
};
