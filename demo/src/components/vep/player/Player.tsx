import React from "react";

export interface IPlayerProps {
  width?: number;
  source: string | null;
  file: File | null;
  /** use default html5 controls */
  defaultControls?: boolean;
}

/** component containing the video player
 * @param source the source of the video
 * @param width the width of the video defaults to 480
 * @returns the video player
 */
export const Player: React.FC<IPlayerProps> = ({
  source,
  width = 1024,
  defaultControls = false,
}) => {
  return (
    <>
      <video width={width} src={source ?? ""} controls={defaultControls} />
    </>
  );
};