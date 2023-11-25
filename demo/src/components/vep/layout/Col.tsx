import React from "react";

export interface IColProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
}

/** flex items in col direction */
export const Col: React.FC<IColProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} style={{ flexDirection: "column", display: "flex" }}>
      {children}
    </div>
  );
};
