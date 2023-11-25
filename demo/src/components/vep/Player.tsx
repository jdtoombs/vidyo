import React from "react";

export interface IPlayerProps {
  width?: number;
  source: string | null;
  file: File | null;
}

/** component containing the video player
 * @param source the source of the video
 * @param width the width of the video defaults to 300
 * @returns the video player
 */
export const Player: React.FC<IPlayerProps> = ({ source, width = 300 }) => {
  return (
    <>
      <video width={width} src={source ?? ""} controls />
    </>
  );
};
