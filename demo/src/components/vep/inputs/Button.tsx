import React from "react";
import * as styled from "./styled";

export interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: React.ReactNode;
  variant?: "danger" | "action";
  customBorder?: string;
  customRadius?: string;
}

export const Button: React.FC<IButtonProps> = ({
  variant,
  customBorder,
  customRadius,
  ...rest
}) => {
  return (
    <styled.Button
      $customBorder={customBorder}
      $customRadius={customRadius}
      $variant={variant}
      {...rest}
    ></styled.Button>
  );
};
