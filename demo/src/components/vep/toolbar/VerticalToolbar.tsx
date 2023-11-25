import React from "react";
import * as styled from "./styled";

export interface IVerticalToolbarProps {
  children: React.ReactNode;
}

/** component containing the vertical toolbar
 * @param children the children of the component
 * @returns the vertical toolbar
 */
export const VerticalToolbar: React.FC<IVerticalToolbarProps> = ({
  children,
}) => {
  return <styled.VerticalToolbar>{children}</styled.VerticalToolbar>;
};
