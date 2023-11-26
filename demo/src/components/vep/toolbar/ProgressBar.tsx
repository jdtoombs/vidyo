import React from "react";
import * as styled from "./styled";

export interface IProgressBarProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement> {}

export const ProgressBar: React.FC<IProgressBarProps> = ({ ...rest }) => (
  <styled.ProgressBar {...rest} />
);
