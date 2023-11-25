import React from "react";
import * as styled from "./styled";
import { PlayPause } from "./PlayPause";

export interface IControlBarProps {
  video: React.RefObject<HTMLVideoElement>;
}

export const ControlBar: React.FC<IControlBarProps> = ({ video }) => {
  return (
    <styled.ControlBar>
      <PlayPause video={video} />
    </styled.ControlBar>
  );
};
