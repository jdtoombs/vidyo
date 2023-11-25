import React from "react";

export interface IColProps {
  children: React.ReactNode;
}

/** flex items in col direction */
export const Col: React.FC<IColProps> = ({ children }) => {
  return (
    <div style={{ flexDirection: "column", display: "flex" }}>{children}</div>
  );
};
