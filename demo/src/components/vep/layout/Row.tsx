import React from "react";

export interface IRowProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
}

/** flex items in row direction */
export const Row: React.FC<IRowProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} style={{ flexDirection: "row", display: "flex" }}>{children}</div>
  );
};
