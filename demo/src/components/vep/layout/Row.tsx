import React from "react";

export interface IRowProps {
  children: React.ReactNode;
}

/** flex items in row direction */
export const Row: React.FC<IRowProps> = ({ children }) => {
  return (
    <div style={{ flexDirection: "row", display: "flex" }}>{children}</div>
  );
};
